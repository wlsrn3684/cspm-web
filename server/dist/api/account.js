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
const crypto_1 = __importDefault(require("crypto"));
exports.default = (server, connection) => {
    server.post("/api/account", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const hash = crypto_1.default.createHash("sha256");
            hash.update(mysql2_1.escape(req.body.password));
            let hash_password = hash.digest("hex");
            yield connection.query(`INSERT INTO USER (SYSTEM_ID, PASSWORD, LAST) VALUES (${mysql2_1.escape(req.body.id)}, ${mysql2_1.escape(hash_password)}, NOW())`);
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
    server.post("/api/account/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const hash = crypto_1.default.createHash("sha256");
            hash.update(mysql2_1.escape(req.body.password));
            let hash_password = hash.digest("hex");
            const [[userInfo]] = yield connection.query(`SELECT PASSWORD FROM USER WHERE SYSTEM_ID=${mysql2_1.escape(req.body.id)}`);
            const result = hash_password === userInfo.PASSWORD;
            if (result) {
                const token = jsonwebtoken_1.default.sign({
                    id: req.body.id,
                }, "my_secret_key", {
                    expiresIn: "300h",
                    issuer: "DDDG",
                    subject: "userInfo",
                });
                res.send({
                    result: true,
                    token,
                });
            }
            else {
                res.send({
                    result: false,
                    msg: "Password Error",
                });
            }
        }
        catch (_b) {
            res.send({
                result: false,
                msg: "Server Error",
            });
        }
    }));
    server.put("/api/account", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let system_id = "";
            if (req.headers.token) {
                try {
                    let decoded = jsonwebtoken_1.default.verify(req.headers.token, "my_secret_key");
                    system_id = decoded.id;
                }
                catch (_c) {
                    system_id = "-1";
                }
            }
            const hash = crypto_1.default.createHash("sha256");
            hash.update(mysql2_1.escape(req.body.password));
            let hash_password = hash.digest("hex");
            const [[userInfo]] = yield connection.query(`SELECT PASSWORD FROM USER WHERE SYSTEM_ID=${mysql2_1.escape(system_id)}`);
            const result = hash_password === userInfo.PASSWORD;
            if (result) {
                const hash2 = crypto_1.default.createHash("sha256");
                hash2.update(mysql2_1.escape(req.body.new_password));
                let hash_password2 = hash2.digest("hex");
                if (system_id != "" && system_id != "-1") {
                    yield connection.query(`UPDATE USER SET PASSWORD=${mysql2_1.escape(hash_password2)}, LAST=NOW() WHERE SYSTEM_ID=${mysql2_1.escape(system_id)}`);
                    res.send({
                        result: true,
                    });
                }
                else {
                    res.send({
                        result: true,
                        msg: "token is not valid",
                    });
                }
            }
            else {
                res.send({
                    result: true,
                    msg: "password is not valid",
                });
            }
        }
        catch (_d) {
            res.send({
                result: false,
            });
        }
    }));
    server.delete("/api/account", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let system_id = "";
            if (req.headers.token) {
                try {
                    let decoded = jsonwebtoken_1.default.verify(req.headers.token, "my_secret_key");
                    system_id = decoded.id;
                }
                catch (_e) {
                    system_id = "-1";
                }
            }
            const hash = crypto_1.default.createHash("sha256");
            hash.update(mysql2_1.escape(req.body.password));
            let hash_password = hash.digest("hex");
            const [[userInfo]] = yield connection.query(`SELECT PASSWORD FROM USER WHERE SYSTEM_ID=${mysql2_1.escape(system_id)}`);
            const result = hash_password === userInfo.PASSWORD;
            if (result) {
                if (system_id != "" && system_id != "-1") {
                    yield connection.query(`DELETE FROM USER WHERE SYSTEM_ID=${mysql2_1.escape(system_id)}`);
                    res.send({
                        result: true,
                    });
                }
                else {
                    res.send({
                        result: true,
                        msg: "token is not valid",
                    });
                }
            }
            else {
                res.send({
                    result: true,
                    msg: "password is not valid",
                });
            }
        }
        catch (_f) {
            res.send({
                result: false,
            });
        }
    }));
};
/*

CREATE TABLE USER (
    SYSTEM_ID VARCHAR(20) NOT NULL,
    PASSWORD VARCHAR(80) NOT NULL,
    LAST DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (SYSTEM_ID)
);

*/
