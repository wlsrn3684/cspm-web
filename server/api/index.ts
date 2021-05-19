import { Application } from "express";
import { Pool } from "mysql2";
import account from "./account";
import asset from "./asset";
import vlunerability from "./vulnerability";
import setting from "./setting";
import dashboard from "./dashboard";
import assessment from "./assessment";
import history from "./history";

export default (server: Application, connection: Pool) => {
  account(server, connection);
  asset(server, connection);
  setting(server, connection);
  dashboard(server, connection);
  vlunerability(server, connection);
  assessment(server, connection);
  history(server, connection);
};
