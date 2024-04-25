import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import { getCategory } from "../services/category.services";

export default function Category() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategory((data) => {
      setCategory(data);
    });
  }, []);
  return (
    <>
      <div className=" mx-auto flex flex-col container ">
        <div className="w-full">
          <div className="flex justify-between ">
            <div className="mb-5">
              <label className="font-bold text-slate-700" htmlFor="search">
                Pencarian
              </label>
              <input
                type="text"
                className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="cari..."
                id="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-end"></div>
          </div>
          <div className="relative shadow rounded-lg mt-3">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="py-3 px-1 text-center">No</th>
                  <th className="py-3 px-1 text-center">Category</th>
                </tr>
              </thead>
              <tbody>
                {category
                  .filter((item) => item.toLowerCase().includes(search))
                  .map((item, index) => (
                    <tr key={index} className="hover:bg-slate-100">
                      <td className="py-3 px-1 text-center">{index + 1}</td>
                      <td className="py-3 px-1 text-center">{item}</td>
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
