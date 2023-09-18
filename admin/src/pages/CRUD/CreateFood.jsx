import { Link } from "react-router-dom";
import InputString from "../../components/CRUD/InputString";
import Header from "../../components/Header/Header";

export default function CreateFood() {
  return (
    <div className="relative h-full overflow-y-auto bg-gray-50 lg:ml-64">
      <main>
        <Header title="Create food" />
        <div className="p-4">
          <form action="#">
            <div className="space-y-4">
              <InputString
                labelName="Name"
                type="text"
                name="name"
                placeholder="Type food name"
              />
              <button
                type="submit"
                className="text-white justify-center bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create food
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
