export default function CreateCategory() {
  return (
    <div className="relative h-full overflow-y-auto bg-gray-50 lg:ml-64">
      <main>
        <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
          <div className="w-full mb-1">
            <h1 className="text-2xl font-semibold text-gray-900">
              Create new category
            </h1>
          </div>
        </div>
        <div className="p-4">
          <form action="#">
            <div className="space-y-4">
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/3 p-2.5"
                  placeholder="Type category name"
                />
              </div>
              {/* Change this for react-select */}
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="protein"
                >
                  Protein
                </label>
                <input
                  type="number"
                  step={100}
                  name="protein"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/3 p-2.5"
                  placeholder="Input protein"
                />
              </div>
              <button
                type="submit"
                className="text-white justify-center bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create category
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}