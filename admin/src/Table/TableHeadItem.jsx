export default function TableHeadItem({ name }) {
  return (
    <th
      scope="col"
      className="p-4 text-xs font-medium text-left text-gray-500 uppercase"
    >
      {name}
    </th>
  );
}
