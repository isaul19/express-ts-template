import "dotenv/config";
import { get } from "env-var";

export class Env {
  static get PORT() {
    return get("PORT").required().asPortNumber();
  }

  static get DB_HOST() {
    return get("DB_HOST").required().asString();
  }

  static get DB_PORT() {
    return get("DB_PORT").required().asPortNumber();
  }

  static get DB_USER() {
    return get("DB_USER").required().asString();
  }

  static get DB_PASSWORD() {
    return get("DB_PASSWORD").required().asString();
  }

  static get DB_NAME() {
    return get("DB_NAME").required().asString();
  }
}
