import { Application } from "express";
import { escape } from "mysql2";

interface IHistory {
  ID: string;
  ASSESSMENT_ID: string;
  HIGH_TOTAL: string;
  HIGH_COUNT: string;
  MIDDLE_TOTAL: string;
  MIDDLE_COUNT: string;
  LOW_TOTAL: string;
  LOW_COUNT: string;
  START_DATE: string;
}

export default (server: Application, connection: any) => {
  server.get("/api/history/all", async (req, res) => {
    if (!req.query.assessment_id) {
      res.send({
        result: true,
        msg: "Query is not valid",
      });
    }

    const [[data]] = await connection.query(
      `SELECT COUNT(*) as COUNT FROM ASSESSMENT_HISTORY WHERE ASSESSMENT_ID=${escape(
        req.query.assessment_id
      )}`
    );

    res.send({
      result: true,
      count: data.COUNT,
    });
  });

  server.get("/api/history/last", async (req, res) => {
    if (!req.query.assessment_id) {
      res.send({
        result: true,
        msg: "Query is not valid",
      });
    }

    const [[data]] = await connection.query(
      `SELECT * FROM ASSESSMENT_HISTORY WHERE ASSESSMENT_ID=${escape(
        req.query.assessment_id
      )} ORDER BY START_DATE DESC LIMIT 1`
    );

    res.send({
      result: true,
      history: data && {
        id: data.ID,
        assessment_id: data.ASSESSMENT_ID,
        high_total: data.HIGH_TOTAL,
        high_count: data.HIGH_COUNT,
        middle_total: data.MIDDLE_TOTAL,
        middle_count: data.MIDDLE_COUNT,
        low_total: data.LOW_TOTAL,
        low_count: data.LOW_COUNT,
        start_date: data.START_DATE,
      },
    });
  });

  server.get("/api/history/id", async (req, res) => {
    if (!req.query.id) {
      res.send({
        result: true,
        msg: "Query is not valid",
      });
    }

    const [[data]] = await connection.query(
      `SELECT * FROM ASSESSMENT_HISTORY WHERE ID=${escape(
        req.query.id
      )} ORDER BY START_DATE DESC LIMIT 1`
    );

    res.send({
      result: true,
      history: data && {
        id: data.ID,
        assessment_id: data.ASSESSMENT_ID,
        high_total: data.HIGH_TOTAL,
        high_count: data.HIGH_COUNT,
        middle_total: data.MIDDLE_TOTAL,
        middle_count: data.MIDDLE_COUNT,
        low_total: data.LOW_TOTAL,
        low_count: data.LOW_COUNT,
        start_date: data.START_DATE,
      },
    });
  });

  server.get("/api/history", async (req, res) => {
    const [rows]: IHistory[][] = await connection.query(
      `SELECT * FROM ASSESSMENT_HISTORY WHERE ASSESSMENT_ID=${req.query.assessment_id} ORDER BY START_DATE DESC`
    );
    let histories: any[] = [];

    for (let row of rows) {
      histories.push({
        id: row.ID,
        assessment_id: row.ASSESSMENT_ID,
        high_total: row.HIGH_TOTAL,
        high_count: row.HIGH_COUNT,
        middle_total: row.MIDDLE_TOTAL,
        middle_count: row.MIDDLE_COUNT,
        low_total: row.LOW_TOTAL,
        low_count: row.LOW_COUNT,
        start_date: row.START_DATE,
      });
    }

    res.send({
      result: true,
      histories: histories,
    });
  });

  server.post("/api/history", async (req, res) => {
    try {
      await connection.query(
        `INSERT INTO ASSESSMENT_HISTORY (ID, ASSESSMENT_ID, HIGH_TOTAL, HIGH_COUNT, MIDDLE_TOTAL, MIDDLE_COUNT, LOW_TOTAL, LOW_COUNT, START_DATE) VALUES 
        (
        ${escape(req.body.id)}, 
        ${escape(req.body.assessment_id)}, 
        ${escape(req.body.high_total)}, 
        ${escape(req.body.high_count)}, 
        ${escape(req.body.middle_total)}, 
        ${escape(req.body.middle_count)}, 
        ${escape(req.body.low_total)}, 
        ${escape(req.body.low_count)}, 
        NOW()
        )`
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

  server.put("/api/history", async (req, res) => {
    try {
      await connection.query(
        `UPDATE ASSESSMENT_HISTORY SET HIGH_COUNT=${escape(
          req.body.high_count
        )}, MIDDLE_COUNT=${escape(req.body.middle_count)}, LOW_COUNT=${escape(
          req.body.low_count
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
};

/* 

CREATE TABLE ASSESSMENT_HISTORY (
    ID VARCHAR(80) NOT NULL,
    ASSESSMENT_ID INT NOT NULL,
    HIGH_TOTAL INT NOT NULL,
    HIGH_COUNT INT NOT NULL,
    MIDDLE_TOTAL INT NOT NULL,
    MIDDLE_COUNT INT NOT NULL,
    LOW_TOTAL INT NOT NULL,
    LOW_COUNT INT NOT NULL,
    START_DATE DATETIME NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (ASSESSMENT_ID) REFERENCES ASSESSMENT (ID) ON DELETE CASCADE
);

*/
