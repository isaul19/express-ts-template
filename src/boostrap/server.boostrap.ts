import express from "express";

interface Options {
  port: number;
  appRouter: express.Router;
}

export class Server {
  private app = express();
  private readonly port;
  private readonly appRouter;

  constructor({ port, appRouter }: Options) {
    this.port = port;
    this.appRouter = appRouter;

    this.middlewares();
    this.routes();
  }

  private middlewares = () => {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  };

  private routes = () => {
    this.app.use("/api", this.appRouter);
  };

  public start = () => {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  };
}
