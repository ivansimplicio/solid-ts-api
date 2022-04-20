import "reflect-metadata";
import { Request, Response } from "express";
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes";

createConnection()
  .then(async () => {
    const express = require("express");
    const app = express();
    app.use(bodyParser.json());
    const port = 3000;

    AppRoutes.forEach((route) => {
      app[route.method](
        route.path,
        (request: Request, response: Response, next: Function) => {
          route
            .action(request, response)
            .then(() => next)
            .catch((err) => next(err));
        }
      );
    });

    app.listen(port, () => {
      console.log(`The application is running at  http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect to database", error);
  });
