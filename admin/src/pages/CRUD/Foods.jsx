import { Link } from "react-router-dom";
import CRUDHeader from "../../components/Header/CRUDHeader";

export default function Foods() {
  return (
    <CRUDHeader
      title="All foods"
      createButtonLabel="Create food"
      createButtonLink="/food/create"
    />
  );
}
