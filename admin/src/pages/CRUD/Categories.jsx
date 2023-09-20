import { Link } from "react-router-dom";
import CRUDHeader from "../../components/Header/CRUDHeader";
import { useAppContext } from "../../components/Context/AppContext";
import CRUDMainLayout from "../../components/layout/CRUDMainLayout";
import TableHeadItem from "../../Table/TableHeadItem";
import { useEffect } from "react";
import CategoryTableItem from "../../components/CategoryTableItem";

export default function Categories() {
  const { categories, fetchCategories } = useAppContext();
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  });
  return (
    <>
      <CRUDHeader
        title="All categories"
        handleRefresh={fetchCategories}
        createButtonLabel="Create category"
        createButtonLink="/category/create"
      />
      <CRUDMainLayout>
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-100">
            <tr>
              <TableHeadItem name="Category Name" />
              <TableHeadItem name="Foods" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((item, index) => (
              <CategoryTableItem
                key={index}
                name={item.name}
                categoryUrl={item.categoryUrl}
                foods={item.foods}
              />
            ))}
          </tbody>
        </table>
      </CRUDMainLayout>
    </>
  );
}
