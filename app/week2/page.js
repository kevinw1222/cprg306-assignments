import StudentInfo from "../StudentInfo";
import Link from "next/link";

export default function MyPage() {
  return (
    <main>
      <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Week 2</span>
        </div>

        <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-400">
          <Link href="/">Home</Link>
        </button>
      </nav>
      <StudentInfo />
    </main>
  );
}
