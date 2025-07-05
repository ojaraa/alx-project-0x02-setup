"use client";

import React, { useEffect, useState } from "react";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";
import Header from "@/components/layout/Header";

type UsersPageProps = {
  users: UserProps[];
};

const UsersPage = ({ users }: UsersPageProps) => {
  return (
    <>
      <Header />
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
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return {
      props: {
        users,
      },
    };
  } catch (error) {
    return {
      props: {
        users: [],
      },
    };
  }
};

export default UsersPage;
