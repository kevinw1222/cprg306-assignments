"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  const [isGrouped, setIsGrouped] = useState(false);
  const sortedItems = [...items];
  const [sortedAndGroupedItems, setSortedAndGroupedItems] = useState(null);

  const renderSortButton = (buttonSortBy, label) => (
    <button
      className="px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400"
      onClick={() => setSortBy(buttonSortBy)}
    >
      {label}
    </button>
  );

  const toggleGrouping = () => {
    setIsGrouped(!isGrouped);
    if (isGrouped) {
      setSortedAndGroupedItems(null);
      setSortBy("name");
    } else groupAndSortByCategory();
  };

  const groupAndSortByCategory = () => {
    const groupedItems = items.reduce((grouped, item) => {
      const category = item.category;
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(item);
      return grouped;
    }, {});

    const sortedCategories = Object.keys(groupedItems).sort();

    const sortedAndGroupedItems = sortedCategories.reduce(
      (sorted, category) => {
        const sortedCategoryItems = groupedItems[category].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        sorted.push({ category, items: sortedCategoryItems });
        return sorted;
      },
      []
    );
    setSortedAndGroupedItems(sortedAndGroupedItems);
  };

  const handleItemClick = (item) => {
    onItemSelect(item);
  };

  if (sortBy === "name")
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortBy === "category")
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));

  return (
    <div>
      <div>
        {renderSortButton("name", "Sort by Name")}
        {renderSortButton("category", "Sort by Category")}
        <button
          className="px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400"
          onClick={toggleGrouping}
        >
          {isGrouped ? "Reset" : " Group by Category"}
        </button>
      </div>
      <ul>
        {sortedAndGroupedItems
          ? sortedAndGroupedItems.map((category) => (
              <li key={category.category}>
                <h2 className="text-lg capitalize">{category.category}</h2>
                <ul>
                  {category.items.map((item) => (
                    <li key={item.id} onClick={() => handleItemClick(item)}>
                      <Item
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                      />
                    </li>
                  ))}
                </ul>
              </li>
            ))
          : sortedItems.map((item) => (
              <li key={item.id} onClick={() => handleItemClick(item)}>
                <Item
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              </li>
            ))}
      </ul>
    </div>
  );
}
