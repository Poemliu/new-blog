import { neon } from "@neondatabase/serverless";

const getData = async () => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const posts: { acc: string }[] = await sql("SELECT acc FROM acc ");
  console.log(posts);
  return posts;
};

export { getData };
