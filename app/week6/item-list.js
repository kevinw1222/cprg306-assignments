"use client";
import { useState, useEffect } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const [isGrouped, setIsGrouped] = useState(false);
  const sortedItems = [...items];
  // const [sortedAndGroupedItems, setSortedAndGroupedItems] = useState(null);

  const [groupedItems, setGroupedItems] = useState({});

  const renderSortButton = (buttonSortBy, label) => (
    <button
      className="px-2 py-2 ml-4 mt-4 text-black bg-orange-500 rounded hover:bg-orange-400"
      onClick={() => setSortBy(buttonSortBy)}
    >
      {label}
    </button>
  );

  useEffect(() => {
    groupAndSortByCategory();
  }, [items]);

  const toggleGrouping = () => {
    setIsGrouped(!isGrouped);

    if (isGrouped) {
      setGroupedItems(null);
      setSortBy("name");
    } else groupAndSortByCategory();
  };

  const groupAndSortByCategory = () => {
    const groupedItems = items.reduce((accumulator, item) => {
      const category = item.category;

      if (!accumulator[category]) accumulator[category] = [];
      accumulator[category].push(item);

      return accumulator;
    }, {});
    // const groupedItems = items.reduce((grouped, item) => {
    //   const category = item.category;

    //   if (!grouped[category]) {
    //     grouped[category] = [];
    //   }
    //   grouped[category].push(item);
    //   return grouped;
    // }, {});

    // const sortedCategories = Object.keys(groupedItems).sort();

    // const sortedAndGroupedItems = sortedCategories.reduce(
    //   (sorted, category) => {
    //     const sortedCategoryItems = groupedItems[category].sort((a, b) => nameCompare(a, b));
    //     sorted.push({ category, items: sortedCategoryItems });
    //     return sorted;
    //   },
    //   []
    // );
    // setSortedAndGroupedItems(sortedAndGroupedItems);

    setGroupedItems(groupedItems);
  };

  const nameCompare = (a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  };
  const categoryCompare = (a, b) => {
    if (a.category > b.category) return 1;
    if (a.category < b.category) return -1;
    return 0;
  };

  if (sortBy === "name") sortedItems.sort((a, b) => nameCompare(a, b));
  else if (sortBy === "category")
    sortedItems.sort((a, b) => categoryCompare(a, b));

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
        {isGrouped
          ? Object.keys(groupedItems)
              .sort()
              .map((category) => (
                <li key={category}>
                  <h2 className="text-lg capitalize">{category}</h2>
                  <ul>
                    {groupedItems[category]
                      .sort((a, b) => nameCompare(a, b))
                      .map((item) => (
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

      {/* <ul>
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
      </ul> */}
    </div>
  );
}
