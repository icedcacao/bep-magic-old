import { Link } from "react-router-dom";

export default function MultiNavItem({ link, label }) {
  return (
    <li>
      <Link
        className="flex items-center p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100 pl-11"
        to={link}
      >
        {label}
      </Link>
    </li>
  );
}
