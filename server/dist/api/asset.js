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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (server, connection) => {
    server.get("/api/asset", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let query_text = "";
        if (req.query.id)
            query_text = `ID=${mysql2_1.escape(req.query.id)}`;
        if (req.headers.token) {
            try {
                let decoded = jsonwebtoken_1.default.verify(req.headers.token, "my_secret_key");
                query_text = `SYSTEM_ID=${mysql2_1.escape(decoded.id)}`;
            }
            catch (_a) {
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
            const [rows] = yield connection.query(`SELECT * FROM ACCOUNT WHERE ${query_text}`);
            let accounts = [];
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
    }));
    server.post("/api/asset", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let system_id = "";
            if (req.headers.token) {
                try {
                    let decoded = jsonwebtoken_1.default.verify(req.headers.token, "my_secret_key");
                    system_id = decoded.id;
                }
                catch (_b) {
                    system_id = "-1";
                }
            }
            if (system_id != "" && system_id != "-1") {
                yield connection.query(`INSERT INTO ACCOUNT (SYSTEM_ID, MANAGER, PLATFORM, TYPE, NAME, ACCESS_KEY, SECRET_KEY, REGION) VALUES (${mysql2_1.escape(system_id)}, ${mysql2_1.escape(req.body.manager)}, ${mysql2_1.escape(req.body.platform)}, ${mysql2_1.escape(req.body.type)}, ${mysql2_1.escape(req.body.name)}, ${mysql2_1.escape(req.body.access_key)}, ${mysql2_1.escape(req.body.secret_key)}, ${mysql2_1.escape(req.body.region)})`);
                res.send({
                    result: true,
                });
            }
            else {
                res.send({
                    result: false,
                    msg: "token is not valid",
                });
            }
        }
        catch (_c) {
            res.send({
                result: false,
            });
        }
    }));
    server.put("/api/asset", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let system_id = "";
            if (req.headers.token) {
                try {
                    let decoded = jsonwebtoken_1.default.verify(req.headers.token, "my_secret_key");
                    system_id = decoded.id;
                }
                catch (_d) {
                    system_id = "-1";
                }
            }
            console.log(req.body);
            if (system_id != "" && system_id != "-1") {
                yield connection.query(`UPDATE ACCOUNT SET MANAGER=${mysql2_1.escape(req.body.manager)}, PLATFORM=${mysql2_1.escape(req.body.platform)}, TYPE=${mysql2_1.escape(req.body.type)}, NAME=${mysql2_1.escape(req.body.name)}, ACCESS_KEY=${mysql2_1.escape(req.body.access_key)}, SECRET_KEY=${mysql2_1.escape(req.body.secret_key)}, REGION=${mysql2_1.escape(req.body.region)} WHERE ID=${mysql2_1.escape(req.body.id)}`);
                res.send({
                    result: true,
                });
            }
            else {
                res.send({
                    result: false,
                    msg: "token is not valid",
                });
            }
        }
        catch (_e) {
            res.send({
                result: false,
            });
        }
    }));
    server.delete("/api/asset", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield connection.query(`DELETE FROM ACCOUNT WHERE ID=${mysql2_1.escape(req.body.id)}`);
            res.send({
                result: true,
            });
        }
        catch (_f) {
            res.send({
                result: false,
            });
        }
    }));
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
