"use client";
import { useState } from "react";

export default function NewItem() {
  const [itenName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <div></div>
    </main>
  );
}
