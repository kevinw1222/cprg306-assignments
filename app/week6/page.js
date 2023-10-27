"use client";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Week 6: Shopping List Filter
          </span>
        </div>

        <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-400">
          <Link href="/">Home</Link>
        </button>
      </nav>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
