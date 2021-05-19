"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
exports.default = (server, connection) => {
    server.get("/api/assessment", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let query_text = "";
        if (req.query.account_id) {
            query_text = `ACCOUNT_ID=${mysql2_1.escape(req.query.account_id)}`;
        }
        if (req.query.id) {
            query_text = `ID=${mysql2_1.escape(req.query.id)}`;
        }
        if (query_text === "")
            res.send({
                result: true,
                msg: "Query is not valid",
            });
        const [rows] = yield connection.query(`SELECT * FROM ASSESSMENT WHERE ${query_text}`);
        let assessments = [];
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
    }));
    server.post("/api/assessment", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield connection.query(`INSERT INTO ASSESSMENT (ACCOUNT_ID, ASSESSMENT_MANAGER, START_DATE, STATUS) VALUES (${mysql2_1.escape(req.body.account_id)}, ${mysql2_1.escape(req.body.assessment_manager)}, NOW(), '점검대기')`);
            res.send({
                result: true,
            });
        }
        catch (_a) {
            res.send({
                result: false,
            });
        }
    }));
    server.put("/api/assessment/status", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield connection.query(`UPDATE ASSESSMENT SET STATUS=${mysql2_1.escape(req.body.status)} WHERE ID=${mysql2_1.escape(req.body.id)}`);
            res.send({
                result: true,
            });
        }
        catch (_b) {
            res.send({
                result: false,
            });
        }
    }));
    server.put("/api/assessment/end", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield connection.query(`UPDATE ASSESSMENT SET END_DATE=NOW() WHERE ACCOUNT_ID=${mysql2_1.escape(req.body.id)}`);
            res.send({
                result: true,
            });
        }
        catch (_c) {
            res.send({
                result: false,
            });
        }
    }));
    server.delete("/api/assessment", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield connection.query(`DELETE FROM ASSESSMENT WHERE ID=${mysql2_1.escape(req.body.id)}`);
            res.send({
                result: true,
            });
        }
        catch (_d) {
            res.send({
                result: false,
            });
        }
    }));
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
