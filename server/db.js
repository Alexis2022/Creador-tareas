import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456789',
    database: process.env.DB_NAME || 'task'
})