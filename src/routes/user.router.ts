import express, { Request, Response } from "express";
import { Database } from "../boostrap/database.boostrap";

export class UserRouter {
  static get router() {
    const router = express.Router();

    router.get("/", async (req: Request, res: Response) => {
      const response = await Database.query("SELECT * FROM pre_imm_backend");
      return res.status(200).json({ response: response });
    });

    return router;
  }
}
