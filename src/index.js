import express from "express";
import cors from "cors";
import db from "./database/models/index.cjs";
import job from "./jobs/index.js";
import routes from "./routes/index.js";
import http from "http";

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);
  app.use(
    cors(),
    express.json(),
    routes
  );

  job();

  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  await new Promise((resolve) => {
    httpServer.listen({ port: 3000 }, () => {
      resolve();
    });
  });

  console.log("🚀 Server ready at http://localhost:3000/");


}

startServer();