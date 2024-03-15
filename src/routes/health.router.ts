import express, { Request, Response } from "express";

export class HealthRouter {
  static get router() {
    const router = express.Router();

    router.get("/", (req: Request, res: Response) => {
      res.sendStatus(200);
    });

    return router;
  }
}
