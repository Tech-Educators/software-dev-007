"use client";
import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const res = await fetch("/api/posts");
    const json = await res.json();
    setPosts(json);
  }

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
