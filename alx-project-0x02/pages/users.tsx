
"use client";

import React, { useEffect, useState } from "react";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";

const UsersPage = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="p-8">Loading users...</p>;
  if (error) return <p className="p-8 text-red-600">Error: {error}</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))}
    </div>
  );
};

export default UsersPage;
