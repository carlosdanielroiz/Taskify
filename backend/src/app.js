import "dotenv/config";
import cors from "cors";
import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();
    this.middewares();
    this.routes();
  }

  middewares() {
    this.server.use(express.json());
    this.server.use(cors({ 
      origin: process.env.BASE_URL,
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "authorization"],
    }))
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;