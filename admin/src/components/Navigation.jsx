import {
  HiTableCells,
  HiPower,
  HiAdjustmentsVertical,
  HiChartPie,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import SingleNavItem from "./Navigation/SingleNavItem";
import MultiNav from "./Navigation/MultiNav";

export default function Navigation() {
  return (
    <div className="flex overflow-hidden bg-gray-50">
      <aside className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full font-normal">
        <div className="relative flex flex-col flex-1 bg-white border-r border-gray-200">
          <div className="flex flex-col flex-1 py-4 overflow-y-auto">
            <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200">
              <div className="flex items-center justify-center pb-3 text-2xl font-semibold">
                <img src="/img/logo.svg" className="h-8" alt="" />
                <span className="text-4xl tracking-tighter font-rounded">
                  <strong className="font-normal text-[#b2404b]">magic</strong>
                  <strong className="font-thin text-[#81b540]">food</strong>
                </span>
              </div>
              <ul className="py-2 space-y-2">
                <SingleNavItem
                  link="/"
                  label="Dashboard"
                  icon={
                    <HiChartPie className="flex-shrink-0 w-6 h-6 text-gray-500 group-hover:text-gray-900" />
                  }
                />
                <MultiNav
                  label="CRUD"
                  navItems={[
                    { label: "Foods", link: "/foods" },
                    { label: "Categories", link: "/categories" },
                  ]}
                  icon={
                    <HiTableCells className="flex-shrink-0 w-6 h-6 text-gray-500 group-hover:text-gray-900" />
                  }
                />
              </ul>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 flex justify-center w-full p-4 space-x-4 bg-white">
            <Link
              className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
              to="/logout"
            >
              <HiPower className="w-6 h-6" />
            </Link>
            <Link
              className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
              to="/settings"
            >
              <HiAdjustmentsVertical className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
