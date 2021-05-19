import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cookeParser from "cookie-parser";
import * as mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";
import logger from "morgan";
import api from "./api";

const app: express.Application = express();
dotenv.config({
  path: path.join(__dirname, "../../.env"),
});
const PORT = process.env.SERVER_PORT || 4000;

app.use(bodyParser.json());
app.use(cookeParser());

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "token"],
};

app.use(cors(corsOptions));

const pool: any = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "1544",
    database: "kim",
  })
  .promise();

app.use(express.json());
app.use(logger("dev"));

api(app, pool);

app.get("/health-check", (req, res) => {
  res.status(200).send("health-check");
});

app.listen(PORT, () => {
  console.log(`>> Start Server 0.0.0.0:${PORT}`);
});
