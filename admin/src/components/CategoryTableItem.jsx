import TableBodyItemArray from "../Table/TableBodyItemArray";
import TableBodyItemMulti from "../Table/TableBodyItemMulti";

export default function CategoryTableItem({ name, categoryUrl, foods }) {
  return (
    <tr className="hover:bg-gray-100">
      <TableBodyItemMulti firstItem={name} secondItem={categoryUrl} />
      <TableBodyItemArray items={foods} />
    </tr>
  );
}
