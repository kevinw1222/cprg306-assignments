"use client";
import { useState } from "react";
import ItemList from "./item-list.js";
import itemsData from "./items.json";
import NewItem from "./new-item.js";
import Link from "next/link.js";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            Week 6: Shopping List
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
