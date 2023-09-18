import { Link } from "react-router-dom";

export default function Foods() {
  return (
    <div className="relative h-full overflow-y-auto bg-gray-50 lg:ml-64">
      <main>
        <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
          <div className="w-full mb-1">
            <div className="mb-4">
              <h1 className="text-2xl font-semibold text-gray-900">
                All foods
              </h1>
            </div>
            <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100">
              {/* <div className="flex items-center mb-4 sm:mb-0">
                
                <form class="sm:pr-3" action="#" method="GET">
                  <label for="products-search" class="sr-only">
                    Search
                  </label>
                  <div class="relative w-48 mt-1 sm:w-64 xl:w-96">
                    <input
                      type="text"
                      name="email"
                      id="products-search"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
                      placeholder="Search for products"
                    />
                  </div>
                </form>
              </div> */}
              {/* Adding Search!!! */}
              <Link
                className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                to="/add/food"
              >
                Add new food
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
