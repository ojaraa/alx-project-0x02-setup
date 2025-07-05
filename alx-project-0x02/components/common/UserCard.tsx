
import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="mb-1">Email: {email}</p>
      <p className="text-gray-600">
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
