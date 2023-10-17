import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Shopping List: Week 5
          </span>
        </div>

        <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-400">
          <Link href="/">Home</Link>
        </button>
      </nav>
      <ItemList />
    </main>
  );
}
