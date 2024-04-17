import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  LayoutDashboard,
  UsersRound,
  BarChartBig,
  MessageSquareMore,
  ShoppingCart,
  ListTodo,
  ChevronFirst,
  ChevronLast,
} from "lucide-react";

export default function Sidebar({ children }) {
  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <LayoutDashboard />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <UsersRound />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <BarChartBig />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <MessageSquareMore />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <ShoppingCart />,
    },
    {
      path: "/productlist",
      name: "Product List",
      icon: <ListTodo />,
    },
  ];

  const [open, setOpen] = useState(true); //menyampaikan sidebar sedang di buka atau tidak
  const [activeIndex, setActiveIndex] = useState(0); // Menyimpan indeks item yang aktif
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Fragment>
      <div className="flex">
        <aside
          className={`transition-all  ${
            open ? "h-screen w-[250px]" : "w-[80px] h-screen"
          } `}
        >
          <nav className="h-full flex flex-col bg-white border-r shadow-sm ">
            <div className="p-4 pb-2 flex justify-between items-center">
              <img
                src={logo}
                className={`overflow-hidden transition-all ${
                  open ? "w-32 ml-8" : "w-0"
                }`}
                alt=""
              />
              <button
                onClick={() => setOpen((curr) => !curr)}
                className="flex items-center p-4  hover:bg-gray-100"
              >
                {open ? <ChevronFirst /> : <ChevronLast />}
              </button>
            </div>

            {menuItems.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white hover:bg-blue-500 rounded-xl mx-2 font-bold "
                    : "hover:bg-gray-100 rounded-xl mx-2  "
                }
                onClick={() => handleClick(index)}
              >
                <div className="flex ml-1 w-[250px] ">
                  <div className="flex items-center p-4">{item.icon}</div>
                  <div
                    className={`items-center p-2 ${open ? "flex" : "hidden"}`}
                  >
                    {item.name}
                  </div>
                </div>
              </NavLink>
            ))}
          </nav>
        </aside>
        <div className="w-full">
          <div className="w-full h-20 shadow-sm flex px-10 items-center">
            <h1 className="text-2xl font-bold w-full">
              {menuItems[activeIndex].name}
            </h1>
            <div className="flex justify-end w-full">Admin</div>
          </div>
          <div className=" p-8  w-full">{children}</div>
        </div>
      </div>
    </Fragment>
  );
}
