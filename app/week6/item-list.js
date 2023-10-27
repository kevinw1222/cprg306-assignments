"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList({ items }) {
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

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItems(updatedItems);
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

    if (sortBy === "name")
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === "category")
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  };

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
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </ul>
              </li>
            ))
          : sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
      </ul>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} - Category:{item.category}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            <button
              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
            >
              Increment
            </button>
            <button
              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
            >
              Decrement
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
