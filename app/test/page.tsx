import { Key } from "react";

export default async function Page() {
  const data = await fetch("https://localhost:3000/api");
  const posts = await data.json();

  return (
    <ul>
      {posts.map((post: { id: Key; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
