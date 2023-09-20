import { Toaster } from "react-hot-toast";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";

export default () => {
  return (
    <>
      <Navigation />
      <div className="relative min-h-screen ml-64 overflow-y-auto bg-gray-50">
        <main>
          <Outlet />
        </main>
      </div>
      <Toaster />
    </>
  );
};
