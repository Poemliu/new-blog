import { neon, NeonQueryFunction } from "@neondatabase/serverless";

const getData = async () => {
  const sql: NeonQueryFunction<false, false> = neon(
    `${process.env.DATABASE_URL}`
  );
  const posts = await sql("SELECT acc FROM acc ");
  console.log(posts);
  return posts;
};

export { getData };
