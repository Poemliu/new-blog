import pg, { Pool } from "pg";
const { Client } = pg;
const client = new Client();
const pool = new Pool();

export { client as default, pool };
