import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.VITE_DB_USER,
  password: process.env.VITE_DB_PASSWORD,
  host: process.env.VITE_DB_HOST,
  port: parseInt(process.env.VITE_DB_PORT || '5432'),
  database: process.env.VITE_DB_NAME,
});

export { pool };