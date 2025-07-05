
"use client";

import React, { useEffect, useState } from "react";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        const mappedPosts: PostProps[] = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }));
        setPosts(mappedPosts);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="p-8">Loading posts...</p>;
  if (error) return <p className="p-8 text-red-600">Error: {error}</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={`${post.userId}-${post.title}`}
          userId={post.userId}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default Posts;
