import { HiMiniChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 mx-auto xl:px-0">
      <div className="block md:max-w-lg">
        <img src="/img/404.svg" alt="chicken" />
      </div>
      <div class="text-center xl:max-w-4xl">
        <h1 class="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Page not found
        </h1>
        <p class="mb-5 text-base font-normal text-gray-500 md:text-lg">
          Oops! Looks like you followed a bad link. If you think this is a
          problem with us, please tell us.
        </p>
        <Link
          class="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3"
          to="/"
        >
          <HiMiniChevronLeft className="w-5 h-5 mr-2 -ml-1" />
          Go back home
        </Link>
      </div>
    </div>
  );
}
