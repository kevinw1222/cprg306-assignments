import StudentInfo from "../StudentInfo";
import Link from "next/link";

export default function MyPage() {
  return (
    <main>
      <h2>My Shopping List</h2>
      <StudentInfo />
      <Link href="/">Home</Link>
    </main>
  );
}
