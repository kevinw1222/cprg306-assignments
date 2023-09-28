import ItemList from "./item-list";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            Shopping List
          </span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-400">
              <Link href="/">Home</Link>
            </button>
          </div>
        </div>
      </nav>
      <ItemList />
    </main>
  );
}
