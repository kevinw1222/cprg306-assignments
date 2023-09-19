import ItemList from "./item-list";
import Item from "./items";

export default function Page() {
  return (
    <main class="bg-white">
      <p className="text-3xl font-bold p-2 m-4">Shopping List</p>
      <ItemList />
    </main>
  );
}
