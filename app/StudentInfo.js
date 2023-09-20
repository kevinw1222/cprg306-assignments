import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h2>Name: Kevin Wong</h2>
      <h2>Class: CPRG-306-F Web Dev 2</h2>
      <p>
        GitHub:{" "}
        <Link class="underline" href="https://www.kevinw1222@github.com">kevinw1222</Link>
      </p>
    </main>
  );
}
