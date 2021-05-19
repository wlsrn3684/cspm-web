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
    server.get("/api/history/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.query.assessment_id) {
            res.send({
                result: true,
                msg: "Query is not valid",
            });
        }
        const [[data]] = yield connection.query(`SELECT COUNT(*) as COUNT FROM ASSESSMENT_HISTORY WHERE ASSESSMENT_ID=${mysql2_1.escape(req.query.assessment_id)}`);
        res.send({
            result: true,
            count: data.COUNT,
        });
    }));
    server.get("/api/history/last", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.query.assessment_id) {
            res.send({
                result: true,
                msg: "Query is not valid",
            });
        }
        const [[data]] = yield connection.query(`SELECT * FROM ASSESSMENT_HISTORY WHERE ASSESSMENT_ID=${mysql2_1.escape(req.query.assessment_id)} ORDER BY START_DATE DESC LIMIT 1`);
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
    }));
    server.get("/api/history/id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.query.id) {
            res.send({
                result: true,
                msg: "Query is not valid",
            });
        }
        const [[data]] = yield connection.query(`SELECT * FROM ASSESSMENT_HISTORY WHERE ID=${mysql2_1.escape(req.query.id)} ORDER BY START_DATE DESC LIMIT 1`);
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
    }));
    server.get("/api/history", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const [rows] = yield connection.query(`SELECT * FROM ASSESSMENT_HISTORY WHERE ASSESSMENT_ID=${req.query.assessment_id} ORDER BY START_DATE DESC`);
        let histories = [];
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
    }));
    server.post("/api/history", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield connection.query(`INSERT INTO ASSESSMENT_HISTORY (ID, ASSESSMENT_ID, HIGH_TOTAL, HIGH_COUNT, MIDDLE_TOTAL, MIDDLE_COUNT, LOW_TOTAL, LOW_COUNT, START_DATE) VALUES 
        (
        ${mysql2_1.escape(req.body.id)}, 
        ${mysql2_1.escape(req.body.assessment_id)}, 
        ${mysql2_1.escape(req.body.high_total)}, 
        ${mysql2_1.escape(req.body.high_count)}, 
        ${mysql2_1.escape(req.body.middle_total)}, 
        ${mysql2_1.escape(req.body.middle_count)}, 
        ${mysql2_1.escape(req.body.low_total)}, 
        ${mysql2_1.escape(req.body.low_count)}, 
        NOW()
        )`);
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
    server.put("/api/history", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield connection.query(`UPDATE ASSESSMENT_HISTORY SET HIGH_COUNT=${mysql2_1.escape(req.body.high_count)}, MIDDLE_COUNT=${mysql2_1.escape(req.body.middle_count)}, LOW_COUNT=${mysql2_1.escape(req.body.low_count)} WHERE ID=${mysql2_1.escape(req.body.id)}`);
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
