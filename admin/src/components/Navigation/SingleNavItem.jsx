import { Link } from "react-router-dom";

export default function SingleNavItem({ link, label, icon }) {
  return (
    <li>
      <Link
        className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100"
        to={link}
      >
        {icon}
        <span className="ml-3">{label}</span>
      </Link>
    </li>
  );
}
