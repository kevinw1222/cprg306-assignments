import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            CPRG-306-F: WebDev 2
          </span>
        </div>

        <ul>
          <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-400">
            <Link href="/week2">Week 2</Link>
          </button>
        </ul>

        <ul>
          <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-400">
            <Link href="/week3">Week 3</Link>
          </button>
        </ul>

        <ul>
          <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-400">
            <Link href="/week4">Week 4</Link>
          </button>
        </ul>
      </nav>

      <StudentInfo />
    </main>
  );
}
