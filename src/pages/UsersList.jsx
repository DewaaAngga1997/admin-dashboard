import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../services/users.service";
import MyComponent from "../components/DeleteBtn";
import DeleteBtn from "../components/DeleteBtn";

export default function UsersList() {
  //cara menggunakan axios API GET data =============
  const [users, setUsers] = useState([]);
  //UseEffect untuk menjalankan fungsi getUsers
  useEffect(() => {
    getUsers((data) => {
      setUsers(data);
    });
  }, []);

  //===================================================
  return (
    <>
      <div className=" mx-auto flex flex-col container ">
        <div className="w-full">
          <div className="flex justify-between ">
            <div className="mb-5">
              <label className="font-bold text-slate-700" htmlFor="search">
                Search
              </label>
              <input
                type="text"
                className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Search..."
                id="search"
              />
            </div>
            <div className="flex items-end">
              <Link
                to="/adduser"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                + Tambah
              </Link>
            </div>
          </div>
          <div className="relative shadow rounded-lg mt-3">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="py-3 px-1 text-center">No</th>
                  <th className="py-3 px-1 text-center">Firts Name</th>
                  <th className="py-3 px-1 text-center">Last Name</th>
                  <th className="py-3 px-1 text-center">Username</th>
                  <th className="py-3 px-1 text-center">Email</th>
                  <th className="py-3 px-1 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="py-3 px-1 text-center">{index + 1}</td>
                    <td className="py-3 px-1 text-center">
                      {user.name.firstname}
                    </td>
                    <td className="py-3 px-1 text-center">
                      {user.name.lastname}
                    </td>
                    <td className="py-3 px-1 text-center">{user.username}</td>
                    <td className="py-3 px-1 text-center">{user.email}</td>
                    <td className="py-3 px-1 text-center">
                      <Link
                        to=""
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                      >
                        Edit
                      </Link>
                      <DeleteBtn onClick={() => deleteUser(user.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
