import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="p-2 m-4 bg-orange-500 text-black max-w-sm rounded-lg hover:bg-orange-400"
    >
      <p className="text-xl font-bold">{name}</p>
      <p className="text-md">Quantity: {quantity}</p>
      <p className="text-md">Category: {category}</p>
    </li>
  );
}
