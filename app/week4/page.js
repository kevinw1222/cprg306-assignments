import Link from "next/link";
import NewItem from "./new-item.js";

export default function Page() {
  return (
    <main>
      <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            Item Manager: Week 4
          </span>
        </div>

        <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-400">
          <Link href="/">Home</Link>
        </button>
      </nav>
      <NewItem />
    </main>
  );
}
