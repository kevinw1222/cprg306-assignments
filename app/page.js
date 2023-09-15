import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/week2">Week 2</Link>
      <h1>CPRG-306-F: Web Dev 2 - Assignments</h1>
      <StudentInfo />
    </main>
  );
}
