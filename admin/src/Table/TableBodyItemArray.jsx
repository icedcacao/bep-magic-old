export default function TableBodyItemArray({ items }) {
  return (
    <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap">
      {items.map((item) => (
        <div className="text-sm font-normal text-gray-500" key={item}>
          {item}
        </div>
      ))}
    </td>
  );
}
