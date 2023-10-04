import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <main>
      <ul>
        <p>Name: {name}</p>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </ul>
    </main>
  );
}
