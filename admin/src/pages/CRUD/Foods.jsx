import CRUDHeader from "../../components/Header/CRUDHeader";
import TableHeadItem from "../../Table/TableHeadItem";
import CRUDMainLayout from "../../components/layout/CRUDMainLayout";

import { useAppContext } from "../../components/Context/AppContext";
import { useEffect } from "react";
import FoodTableItem from "../../components/FoodTableItem";

export default function Foods() {
  const { foods, fetchFoods } = useAppContext();
  useEffect(() => {
    if (foods.length === 0) {
      fetchFoods();
    }
  }, []);
  return (
    <>
      <CRUDHeader
        title="All foods"
        handleRefresh={fetchFoods}
        createButtonLabel="Create food"
        createButtonLink="/food/create"
      />
      <CRUDMainLayout>
        <table className="min-w-full divide-y divide-gray-200 table-fixed">
          <thead className="bg-gray-100">
            <tr>
              <TableHeadItem name="Product Name" />
              <TableHeadItem name="Image" />
              <TableHeadItem name="Price (VND)" />
              <TableHeadItem name="IsDisplayed" />
              <TableHeadItem name="Calories" />
              <TableHeadItem name="Protein" />
              <TableHeadItem name="Fat" />
              <TableHeadItem name="Carb" />
              <TableHeadItem name="Fiber" />
              <TableHeadItem name="Vitamins" />
              <TableHeadItem name="Others" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {foods.map((item) => (
              <FoodTableItem
                key={item._id}
                name={item.name}
                foodUrl={item.foodUrl}
                image={item.image}
                price={item.price}
                isDisplayed={item.isDisplayed}
                calories={item.nutrition.calories}
                protein={item.nutrition.protein}
                fat={item.nutrition.fat}
                carb={item.nutrition.carb}
                fiber={item.nutrition.fiber}
                vitamins={item.nutrition.vitamins}
                others={item.nutrition.others}
              />
            ))}
          </tbody>
        </table>
      </CRUDMainLayout>
    </>
  );
}
