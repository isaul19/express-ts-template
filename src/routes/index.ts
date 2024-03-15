import express from "express";
import { HealthRouter } from "./health.router";
import { UserRouter } from "./user.router";

export class AppRouter {
  static get router() {
    const router = express.Router();

    router.use("/", HealthRouter.router);
    router.use("/user", UserRouter.router);

    return router;
  }
}
