import mysql2, { Pool } from "mysql2/promise";

interface Options {
  host: string;
  user: string;
  password: string;
  dbName: string;
  dbPort: number;
}

let pool: null | Pool = null;

export class Database {
  constructor({ host, user, password, dbName, dbPort }: Options) {
    pool = mysql2.createPool({
      host: host,
      user: user,
      password: password,
      database: dbName,
      port: dbPort,
    });
  }

  checkConnection = async () => {
    try {
      const connection = await pool!.getConnection();
      console.log(`Connected to MySQL database: ${connection.config.database}`);
      connection.release();
    } catch (error) {
      console.log("Error connecting to the database ...");
      throw error;
    }
  };

  static checkPool = () => {
    if (!pool) {
      throw new Error("Pool is not initialized");
    }
    return true;
  };

  static query = async (sql: string, values?: unknown[]) => {
    this.checkPool();

    try {
      const [rows] = await pool!.query(sql, values);
      return rows;
    } catch (error) {
      console.log(error);
      console.log("Error executing query ...");
      throw error;
    }
  };
}
