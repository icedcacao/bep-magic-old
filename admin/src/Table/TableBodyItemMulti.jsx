export default function TableBodyItemMulti({ firstItem, secondItem }) {
  return (
    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
      <div class="text-base font-semibold text-gray-900">{firstItem}</div>
      <div class="text-sm font-normal text-gray-500">{secondItem}</div>
    </td>
  );
}
