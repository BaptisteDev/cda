import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow rounded p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.phone}</p>
      <p className="text-gray-600">{user.website}</p>
      <div className="mt-auto">
        <p className="text-sm text-gray-500">{user.company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
