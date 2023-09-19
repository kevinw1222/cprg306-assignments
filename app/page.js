import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main class="m-4">
      <h1>CPRG-306-F: Web Dev 2 - Assignments</h1>
      <StudentInfo />
      <ul class="m-4">
        <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-400">
          <Link href="/week2">Week 2</Link>
        </button>
      </ul>
      <ul class="m-4">
        <button className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-400">
          <Link href="/week3">Week 3</Link>
        </button>
      </ul>
    </main>
  );
}
