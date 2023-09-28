"use client";
import { useState } from "react";

export default function NewItem() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEvent = {
      itemName,
      quantity,
      category,
    };
    console.log(newEvent);

    setItemName("");
    setQuantity(1);
    setCategory("");
  };

  return (
    <main>
      <form>
        <label>Item name:</label>
        <input type="text" value={itemName}></input>

        <label>Quantity:</label>
        <input type="number" value={quantity}></input>

        <label>Category:</label>
        <input type="text" value={category}></input>
      </form>
    </main>
  );
}
