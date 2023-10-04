"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const sortedItems = items;

  console.log(sortedItems);

  if (sortBy === "name")
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortBy === "quantity")
    sortedItems.sort((a, b) => a.quantity - b.quantity);

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  return (
    <main>
      <div>
        <button onClick={handleSortByName}>Sort by Name</button>
        <button onClick={handleSortByCategory}>Sort by Category</button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </main>
  );
}
