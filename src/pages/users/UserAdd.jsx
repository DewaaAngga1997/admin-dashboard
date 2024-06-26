import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../services/users.service";

export default function UserAdd() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirm_password: "",
  });
  const naviget = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Panggil fungsi addUser dan kirimkan data pengguna dari state
    addUser(userData);
    naviget("/users");
    // console.log(userData);
  };
  return (
    <div className="max-w-lg mx-auto  bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-2xl font-bold text-center">Add User</h1>
      <form className="my-10" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700" htmlFor="firstname">
              First Name
            </label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Input First Name..."
              id="firstname"
              value={userData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700" htmlFor="lastname">
              Last Name
            </label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Input Last Name..."
              id="lastname"
              value={userData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Input Username..."
              id="username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label className="font-bold text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="*******"
              id="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label
              className="font-bold text-slate-700"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="*******"
              id="confirm_password"
              value={userData.confirm_password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex gap-3 justify-center mt-10">
            <button
              type="submit"
              className="w-28 py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded border-blue-500 hover:shadow"
            >
              Simpan
            </button>
            <Link
              to="/users"
              className=" text-center w-28 py-2 px-4 font-bold text-white bg-red-500 hover:bg-red-700 rounded border-red-500 hover:shadow"
            >
              Batal
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
