export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen">
      <div className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10">
        <img src="/img/logo.svg" className="h-8" alt="" />
        <span className="text-4xl tracking-tighter font-rounded">
          <strong className="font-normal text-[#b2404b]">magic</strong>
          <strong className="font-thin text-[#81b540]">food</strong>
        </span>
      </div>
      <div className="w-full max-w-xl p-6 space-y-8 bg-white rounded-lg shadow sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Sign in to platform
        </h2>
        <form className="mt-8 space-y-6" action="#">
          <div>
            <label
              for="username"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your username
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 sm:w-auto"
          >
            Login to your account
          </button>
        </form>
      </div>
    </div>
  );
}
