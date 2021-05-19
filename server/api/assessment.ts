import { Application } from "express";
import { escape } from "mysql2";

interface IAssessment {
  ID: string;
  ACCOUNT_ID: string;
  ASSESSMENT_MANAGER: string;
  START_DATE: string;
  STATUS: string;
}

export default (server: Application, connection: any) => {
  server.get("/api/assessment", async (req, res) => {
    let query_text = "";

    if (req.query.account_id) {
      query_text = `ACCOUNT_ID=${escape(req.query.account_id)}`;
    }

    if (req.query.id) {
      query_text = `ID=${escape(req.query.id)}`;
    }

    if (query_text === "")
      res.send({
        result: true,
        msg: "Query is not valid",
      });

    const [rows]: IAssessment[][] = await connection.query(
      `SELECT * FROM ASSESSMENT WHERE ${query_text}`
    );
    let assessments: any[] = [];

    if (rows.length > 0) {
      for (let row of rows) {
        assessments.push({
          id: row.ID,
          accountId: row.ACCOUNT_ID,
          assessmentManager: row.ASSESSMENT_MANAGER,
          startDate: row.START_DATE,
          status: row.STATUS,
        });
      }
    }

    res.send({
      result: true,
      assessments: assessments,
    });
  });

  server.post("/api/assessment", async (req, res) => {
    try {
      await connection.query(
        `INSERT INTO ASSESSMENT (ACCOUNT_ID, ASSESSMENT_MANAGER, START_DATE, STATUS) VALUES (${escape(
          req.body.account_id
        )}, ${escape(req.body.assessment_manager)}, NOW(), '점검대기')`
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

  server.put("/api/assessment/status", async (req, res) => {
    try {
      await connection.query(
        `UPDATE ASSESSMENT SET STATUS=${escape(
          req.body.status
        )} WHERE ID=${escape(req.body.id)}`
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

  server.put("/api/assessment/end", async (req, res) => {
    try {
      await connection.query(
        `UPDATE ASSESSMENT SET END_DATE=NOW() WHERE ACCOUNT_ID=${escape(
          req.body.id
        )}`
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

  server.delete("/api/assessment", async (req, res) => {
    try {
      await connection.query(
        `DELETE FROM ASSESSMENT WHERE ID=${escape(req.body.id)}`
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

CREATE TABLE ASSESSMENT (
    ID INT AUTO_INCREMENT,
    ACCOUNT_ID INT NOT NULL,
    ASSESSMENT_MANAGER VARCHAR(32) NOT NULL,
    START_DATE DATETIME DEFAULT CURRENT_TIMESTAMP,
    END_DATE DATETIME,
    STATUS VARCHAR(32) NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (ACCOUNT_ID) REFERENCES ACCOUNT (ID) ON DELETE CASCADE
);

*/
