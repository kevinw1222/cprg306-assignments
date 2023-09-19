export default function Item({ name, quantity, category }) {
  return (
    <main>
          <li class="p-2 m-4 bg-orange-400 max-w-sm rounded-sm">
        <p class="text-xl font-bold">{name}</p>
        <p class="text-md">
          By {quantity} in {category}
        </p>
      </li>
    </main>
  );
}
