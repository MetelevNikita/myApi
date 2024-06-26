import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();


const Pool = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_DATABASE

})


export default Pool;