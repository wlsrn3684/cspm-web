import { Application } from "express";
import { escape } from "mysql2";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export default (server: Application, connection: any) => {
  server.post("/api/account", async (req, res) => {
    try {
      const hash = crypto.createHash("sha256");
      hash.update(escape(req.body.password));

      let hash_password = hash.digest("hex");

      await connection.query(
        `INSERT INTO USER (SYSTEM_ID, PASSWORD, LAST) VALUES (${escape(
          req.body.id
        )}, ${escape(hash_password)}, NOW())`
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

  server.post("/api/account/login", async (req, res) => {
    try {
      const hash = crypto.createHash("sha256");

      hash.update(escape(req.body.password));

      let hash_password = hash.digest("hex");

      const [[userInfo]] = await connection.query(
        `SELECT PASSWORD FROM USER WHERE SYSTEM_ID=${escape(req.body.id)}`
      );

      const result = hash_password === userInfo.PASSWORD;

      if (result) {
        const token = jwt.sign(
          {
            id: req.body.id,
          },
          "my_secret_key",
          {
            expiresIn: "300h",
            issuer: "DDDG",
            subject: "userInfo",
          }
        );

        res.send({
          result: true,
          token,
        });
      } else {
        res.send({
          result: false,
          msg: "Password Error",
        });
      }
    } catch {
      res.send({
        result: false,
        msg: "Server Error",
      });
    }
  });

  server.put("/api/account", async (req, res) => {
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

      const hash = crypto.createHash("sha256");

      hash.update(escape(req.body.password));

      let hash_password = hash.digest("hex");

      const [[userInfo]] = await connection.query(
        `SELECT PASSWORD FROM USER WHERE SYSTEM_ID=${escape(system_id)}`
      );

      const result = hash_password === userInfo.PASSWORD;

      if (result) {
        const hash2 = crypto.createHash("sha256");

        hash2.update(escape(req.body.new_password));

        let hash_password2 = hash2.digest("hex");

        if (system_id != "" && system_id != "-1") {
          await connection.query(
            `UPDATE USER SET PASSWORD=${escape(
              hash_password2
            )}, LAST=NOW() WHERE SYSTEM_ID=${escape(system_id)}`
          );
          res.send({
            result: true,
          });
        } else {
          res.send({
            result: true,
            msg: "token is not valid",
          });
        }
      } else {
        res.send({
          result: true,
          msg: "password is not valid",
        });
      }
    } catch {
      res.send({
        result: false,
      });
    }
  });

  server.delete("/api/account", async (req, res) => {
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

      const hash = crypto.createHash("sha256");

      hash.update(escape(req.body.password));

      let hash_password = hash.digest("hex");

      const [[userInfo]] = await connection.query(
        `SELECT PASSWORD FROM USER WHERE SYSTEM_ID=${escape(system_id)}`
      );

      const result = hash_password === userInfo.PASSWORD;

      if (result) {
        if (system_id != "" && system_id != "-1") {
          await connection.query(
            `DELETE FROM USER WHERE SYSTEM_ID=${escape(system_id)}`
          );
          res.send({
            result: true,
          });
        } else {
          res.send({
            result: true,
            msg: "token is not valid",
          });
        }
      } else {
        res.send({
          result: true,
          msg: "password is not valid",
        });
      }
    } catch {
      res.send({
        result: false,
      });
    }
  });
};

/*

CREATE TABLE USER (
    SYSTEM_ID VARCHAR(20) NOT NULL,
    PASSWORD VARCHAR(80) NOT NULL,
    LAST DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (SYSTEM_ID)
);

*/
