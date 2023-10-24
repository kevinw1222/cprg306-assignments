import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-orange-500 max-w-sm rounded-lg hover:bg-orange-400">
      <p className="text-xl font-bold">{name}</p>
      <p className="text-md">
        By {quantity} in {category}
      </p>
    </li>
  );
}
