export default function TableBodyItemMulti({ firstItem, secondItem }) {
  return (
    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
      <div className="text-base font-semibold text-gray-900">{firstItem}</div>
      <div className="text-sm font-normal text-gray-500">{secondItem}</div>
    </td>
  );
}
