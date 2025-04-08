import React from "react";

export default function Form({ handleSubmit, contact, setContact }) {
  const handleChangeEmail = (e) => {
    setContact({
      ...contact,
      email: e.target.value,
    });
  };
  const handleChangePassword = (e) => {
    setContact({
      ...contact,
      password: e.target.value,
    });
  };

  return (
    <form className="flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
        value={contact.email}
        onChange={handleChangeEmail}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
        value={contact.password}
        onChange={handleChangePassword}
      />
      <input
        type="submit"
        value="Se connecter"
        className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600 font-medium cursor-pointer"
      />
    </form>
  );
}
