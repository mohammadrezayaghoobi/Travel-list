export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Start adding some items to your packing list 🚀
      </footer>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everithing! ready to go ✈️"
          : `👜 You have ${numItems} items on your list, and you alredy packed
        ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
