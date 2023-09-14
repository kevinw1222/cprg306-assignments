import StudentInfo from "../StudentInfo";
import Link from "next/link";

export default function MyPage() {
  return (
    <main>
      <Link href="/">Home</Link>
      <h2>My Shopping List</h2>
      <StudentInfo />
    </main>
  );
}
