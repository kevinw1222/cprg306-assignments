import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <p class="text-xl text-center">Name: Kevin Wong</p>
      <p class="text-xl text-center">Section: Software Development</p>
      <p class="text-xl text-center">
        GitHub:{" "}
        <Link class="underline" href="https://www.kevinw1222@github.com">
          kevinw1222
        </Link>
      </p>
    </main>
  );
}
