import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";

export default () => {
  return (
    <>
      <Navigation />
      <div className="relative h-full overflow-y-auto bg-gray-50 lg:ml-64">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
