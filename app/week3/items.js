export default function Item({ name, quantity, category }) {
  return (
    <main>
      <li class="p-2 m-4 bg-orange-500 max-w-md rounded-lg hover:bg-orange-300">
          <p class="text-xl font-bold">{name}</p>
          <p class="text-md">
          By {quantity} in {category}
        </p>
      </li>
    </main>
  );
}
