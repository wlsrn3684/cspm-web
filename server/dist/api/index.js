"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = __importDefault(require("./account"));
const asset_1 = __importDefault(require("./asset"));
const vulnerability_1 = __importDefault(require("./vulnerability"));
const setting_1 = __importDefault(require("./setting"));
const dashboard_1 = __importDefault(require("./dashboard"));
const assessment_1 = __importDefault(require("./assessment"));
const history_1 = __importDefault(require("./history"));
exports.default = (server, connection) => {
    account_1.default(server, connection);
    asset_1.default(server, connection);
    setting_1.default(server, connection);
    dashboard_1.default(server, connection);
    vulnerability_1.default(server, connection);
    assessment_1.default(server, connection);
    history_1.default(server, connection);
};
