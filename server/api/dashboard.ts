import { Application } from "express";
import { escape } from "mysql2";

export default (server: Application, connection: any) => {
  server.get("/api/asset", async (req, res) => {});

  server.post("/api/asset", async (req, res) => {});

  server.put("/api/asset", async (req, res) => {});

  server.delete("/api/asset", async (req, res) => {});
};
