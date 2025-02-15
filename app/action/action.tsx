import { cache } from "react";
import "server-only";
import { pool } from "../db/client";
const getData = cache(async () => {
  // const sql: NeonQueryFunction<false, false> = neon(
  //   `${process.env.DATABASE_URL}`
  // );
  // const posts = await sql("SELECT acc FROM acc ");
  // console.log(posts);
  // return posts;
});
const getHeaderNav = cache(async () => {
  // const sql: NeonQueryFunction<false, false> = neon(
  //   `${process.env.DATABASE_URL}`
  // );
  // const headerNav = await sql("SELECT name FROM headernav ");
  // console.log(headerNav);
  // return headerNav;
  const res = await pool.query(`SELECT title,link from "topNav"`);
  return res.rows; // Hello world!
});
export const preload = (func: Function) => {
  void func();
};
export { getData, getHeaderNav };
