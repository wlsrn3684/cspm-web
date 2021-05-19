import { Application } from "express";
import { escape } from "mysql2";
import jwt from "jsonwebtoken";

interface IAccount {
  ID: string;
  SYSTEM_ID: string;
  MANAGER: string;
  PLATFORM: string;
  TYPE: string;
  NAME: string;
  ACCESS_KEY: string;
  SECRET_KEY: string;
  REGION: string;
}

export default (server: Application, connection: any) => {
  server.get("/api/asset", async (req, res) => {
    let query_text = "";
    if (req.query.id) query_text = `ID=${escape(req.query.id)}`;

    if (req.headers.token) {
      try {
        let decoded = jwt.verify(req.headers.token, "my_secret_key");
        query_text = `SYSTEM_ID=${escape(decoded.id)}`;
      } catch {
        query_text = "-1";
        res.send({ result: true, msg: "token is not valid" });
      }
    }

    if (query_text == "")
      res.send({
        result: true,
        msg: "Query is not valid",
      });

    if (query_text != "" && query_text != "-1") {
      const [rows]: IAccount[][] = await connection.query(
        `SELECT * FROM ACCOUNT WHERE ${query_text}`
      );
      let accounts: any[] = [];

      for (let row of rows) {
        accounts.push({
          id: row.ID,
          systemId: row.SYSTEM_ID,
          manager: row.MANAGER,
          platform: row.PLATFORM,
          type: row.TYPE,
          name: row.NAME,
          accessKey: row.ACCESS_KEY,
          secretKey: row.SECRET_KEY,
          region: row.REGION,
        });
      }

      res.send({
        result: true,
        accounts: accounts,
      });
    }
  });

  server.post("/api/asset", async (req, res) => {
    try {
      let system_id = "";
      if (req.headers.token) {
        try {
          let decoded = jwt.verify(req.headers.token, "my_secret_key");
          system_id = decoded.id;
        } catch {
          system_id = "-1";
        }
      }

      if (system_id != "" && system_id != "-1") {
        await connection.query(
          `INSERT INTO ACCOUNT (SYSTEM_ID, MANAGER, PLATFORM, TYPE, NAME, ACCESS_KEY, SECRET_KEY, REGION) VALUES (${escape(
            system_id
          )}, ${escape(req.body.manager)}, ${escape(
            req.body.platform
          )}, ${escape(req.body.type)}, ${escape(req.body.name)}, ${escape(
            req.body.access_key
          )}, ${escape(req.body.secret_key)}, ${escape(req.body.region)})`
        );
        res.send({
          result: true,
        });
      } else {
        res.send({
          result: false,
          msg: "token is not valid",
        });
      }
    } catch {
      res.send({
        result: false,
      });
    }
  });

  server.put("/api/asset", async (req, res) => {
    try {
      let system_id = "";
      if (req.headers.token) {
        try {
          let decoded = jwt.verify(req.headers.token, "my_secret_key");
          system_id = decoded.id;
        } catch {
          system_id = "-1";
        }
      }

      console.log(req.body);

      if (system_id != "" && system_id != "-1") {
        await connection.query(
          `UPDATE ACCOUNT SET MANAGER=${escape(
            req.body.manager
          )}, PLATFORM=${escape(req.body.platform)}, TYPE=${escape(
            req.body.type
          )}, NAME=${escape(req.body.name)}, ACCESS_KEY=${escape(
            req.body.access_key
          )}, SECRET_KEY=${escape(req.body.secret_key)}, REGION=${escape(
            req.body.region
          )} WHERE ID=${escape(req.body.id)}`
        );
        res.send({
          result: true,
        });
      } else {
        res.send({
          result: false,
          msg: "token is not valid",
        });
      }
    } catch {
      res.send({
        result: false,
      });
    }
  });

  server.delete("/api/asset", async (req, res) => {
    try {
      await connection.query(
        `DELETE FROM ACCOUNT WHERE ID=${escape(req.body.id)}`
      );
      res.send({
        result: true,
      });
    } catch {
      res.send({
        result: false,
      });
    }
  });
};

/*

CREATE TABLE ACCOUNT (
    ID INT AUTO_INCREMENT,
    SYSTEM_ID VARCHAR(32) NOT NULL,
    MANAGER VARCHAR(16) NOT NULL,
    PLATFORM VARCHAR(16) NOT NULL,
    TYPE VARCHAR(32) NOT NULL,
    NAME mediumtext NOT NULL,
    ACCESS_KEY VARCHAR(32) NOT NULL,
    SECRET_KEY VARCHAR(128) NOT NULL,
    REGION VARCHAR(32) NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (SYSTEM_ID) REFERENCES USER (SYSTEM_ID) ON DELETE CASCADE
);

*/
