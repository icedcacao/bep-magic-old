import { Link } from "react-router-dom";
import CRUDHeader from "../../components/Header/CRUDHeader";

export default function Categories() {
  return (
    <>
      <CRUDHeader
        title="All categories"
        createButtonLabel="Create category"
        createButtonLink="/category/create"
      />
    </>
  );
}
