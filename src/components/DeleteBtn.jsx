import React from "react";

export default function DeleteBtn(props) {
  return (
    <button
      {...props}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
    >
      Delete
    </button>
  );
}
