"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  // const [sortBy, setSortBy] = useState("name");
  // const sortedItems = items;

  // console.log(sortedItems);

  // if (sortBy === "name") {
  //   sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  // } else if (sortBy === "quantity") {
  //   sortedItems.sort((a, b) => a.quantity - b.quantity);
  // }

  // const handleSortByName = () => {
  //   setSortBy("name");
  // };

  // const handleSortByCategory = () => {
  //   setSortBy("category");
  // };

  let itemArray = item.map((items) => ({ ...items }));

  let [sortByName, setSortByName] = useState("name");
  let [sortByCategory, setSortByCategory] = useState("category");

  itemArray = itemArray.sort((a, b) => {
    if (isNaN(parseInt(a[sortByName]))) {
      let nameA = a[sortByName].toUpperCase();
      let nameB = b[sortByName].toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    } else {
      return a[sortByName] - b[sortByName];
    }
  });

  if (sortByCategory != "category") {
    itemArray = itemArray.filter((item) => item.category === filter);
  }

  return (
    <main>
      <div>
        <button onChange={(e) => setSortByName(e.target.value)}>
          Sort by Name
        </button>
        <button onChange={(e) => setSortByCategory(e.target.value)}>
          Sort by Category
        </button>
      </div>

      <ul>
        {items.map((item) => (
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
