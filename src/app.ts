import { Server } from "./boostrap/server.boostrap";
import { Database } from "./boostrap/database.boostrap";
import { AppRouter } from "./routes";
import { Env } from "./adapters/env.adapter";

async function boostrap() {
  const server = new Server({
    port: Env.PORT,
    appRouter: AppRouter.router,
  });

  const database = new Database({
    host: Env.DB_HOST,
    user: Env.DB_USER,
    password: Env.DB_PASSWORD,
    dbName: Env.DB_NAME,
    dbPort: Env.DB_PORT,
  });

  database.checkConnection();
  server.start();
}

boostrap();
