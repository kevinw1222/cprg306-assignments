"use client";

import { useState } from "react";

export default function NewEvent() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const [eventCreated, setEventCreated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEvent = {
      itemName,
      quantity,
      category,
    };
    console.log(newEvent);

    setEventCreated(true);

    setItemName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main>
      <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
        {eventCreated && (
          <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
            Event Created
          </div>
        )}
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-8">
            Item Reminder
          </h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <span className="text-gray-800">Item Name:</span>
              <input
                required
                onChange={handleItemNameChange}
                value={itemName}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-800">Quantity:</span>
              <input
                type="number"
                required
                onChange={handleQuantity}
                value={quantity}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              />
            </label>

            <label className="block mb-4 ">
              <span className="text-gray-800">Category:</span>
              <select
                required
                onChange={handleCategory}
                value={category}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              >
                <option value="" disabled selected>
                  Select a category
                </option>
                <option value="produce">Produce</option>
                <option value="diary">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="bakery">Bakery</option>
              </select>
            </label>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
            >
              Commit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
