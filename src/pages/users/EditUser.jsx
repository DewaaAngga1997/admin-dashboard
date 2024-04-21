import React from "react";
import { Link } from "react-router-dom";

export default function EditUser() {
  return (
    <div className="max-w-lg mx-auto  bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 className="text-2xl font-bold text-center">Edit User</h1>
      <form className="my-10" onSubmit={""}>
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
            />
          </div>

          <div className="mb-5">
            <label className="font-bold text-slate-700" htmlFor="password">
              Email
            </label>
            <input
              type="email"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Email..."
              id="email"
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
