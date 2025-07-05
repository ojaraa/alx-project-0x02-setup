"use client";

import React, { useEffect, useState } from "react";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";
import Header from "@/components/layout/Header";


type PostsPageProps = {
  posts: PostProps[];
};

const Posts = ({ posts }: PostsPageProps) => {
 
  return (
    <>
      <Header />
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
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const posts: PostProps[] = data.map((post: any) => ({
      userId: post.userId,
      title: post.title,
      content: post.body,
    }));
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
};


export default Posts;
