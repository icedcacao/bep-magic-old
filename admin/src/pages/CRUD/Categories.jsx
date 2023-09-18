import { Link } from "react-router-dom";
import CRUDHeader from "../../components/Header/CRUDHeader";

export default function Categories() {
  return (
    <div className="relative h-full overflow-y-auto bg-gray-50 lg:ml-64">
      <main>
        <CRUDHeader
          title="All categories"
          createButtonLabel="Add category"
          createButtonLink="/add/category"
        />
      </main>
    </div>
  );
}
