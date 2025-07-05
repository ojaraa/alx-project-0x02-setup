
import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="mb-2">{content}</p>
      <small className="text-gray-500">User ID: {userId}</small>
    </div>
  );
};

export default PostCard;
