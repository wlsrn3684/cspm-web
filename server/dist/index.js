"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mysql = __importStar(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const api_1 = __importDefault(require("./api"));
const app = express_1.default();
dotenv_1.default.config({
    path: path_1.default.join(__dirname, "../../.env"),
});
const PORT = process.env.SERVER_PORT || 4000;
app.use(body_parser_1.default.json());
app.use(cookie_parser_1.default());
const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "token"],
};
app.use(cors_1.default(corsOptions));
const pool = mysql
    .createPool({
    host: "localhost",
    user: "root",
    password: "1544",
    database: "kim",
})
    .promise();
app.use(express_1.default.json());
app.use(morgan_1.default("dev"));
api_1.default(app, pool);
app.get("/health-check", (req, res) => {
    res.status(200).send("health-check");
});
app.listen(PORT, () => {
    console.log(`>> Start Server 0.0.0.0:${PORT}`);
});
