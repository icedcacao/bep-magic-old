import { HiChevronDown } from "react-icons/hi2";
import MultiNavItem from "./MultiNavItem";

export default function MultiNav({ label, navItems, icon }) {
  const listItems = navItems.map((item) => (
    <MultiNavItem key={item.label} link={item.link} label={item.label} />
  ));
  return (
    <li>
      <div className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100">
        {icon}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{label}</span>
        <HiChevronDown className="w-4 h-4" />
      </div>
      <ul className="py-2 space-y-2">{listItems}</ul>
    </li>
  );
}
