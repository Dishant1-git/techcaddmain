import mysql from "mysql2/promise";

/** One shared MySQL connection pool (server only). Connection details come from `.env` — see database/schema.sql. */
const globalForDb = globalThis as unknown as { leadPool?: mysql.Pool };

export const db =
  globalForDb.leadPool ??
  mysql.createPool({
    host: process.env.DB_HOST ?? "127.0.0.1",
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 5,
    charset: "utf8mb4",
  });

// Reuse the pool across hot reloads in `next dev` (otherwise every reload opens new connections).
if (process.env.NODE_ENV !== "production") globalForDb.leadPool = db;
