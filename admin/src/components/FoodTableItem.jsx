import TableBodyItem from "../Table/TableBodyItem";
import TableBodyItemMulti from "../Table/TableBodyItemMulti";

export default function FoodTableItem({
  name,
  foodUrl,
  image,
  price,
  isDisplayed,
  calories,
  protein,
  fat,
  carb,
  fiber,
  vitamins,
  others,
}) {
  return (
    <tr className="hover:bg-gray-100">
      <TableBodyItemMulti firstItem={name} secondItem={foodUrl} />
      <TableBodyItem item={image} />
      <TableBodyItem item={parseInt(price).toLocaleString("it-IT")} />
      <TableBodyItem item={isDisplayed} />
      <TableBodyItem item={calories} />
      <TableBodyItem item={protein} />
      <TableBodyItem item={fat} />
      <TableBodyItem item={carb} />
      <TableBodyItem item={fiber} />
      <TableBodyItem item={vitamins} />
      <TableBodyItem item={others} />
    </tr>
  );
}
