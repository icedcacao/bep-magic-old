import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { updateAxiosToken } from "../util";

export default function SignIn() {
  const [formValue, setformValue] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const SignInFormData = new FormData();
    SignInFormData.append("username", formValue.username);
    SignInFormData.append("password", formValue.password);
    try {
      const url = `http://localhost:3000/login`;
      const response = await axios({
        method: "post",
        url: url,
        data: SignInFormData,
        headers: { "Content-Type": "application/json" },
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      updateAxiosToken()
    } catch (error) {
      console.error(error);
      toast.error("Unable to submit");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen">
      <Link
        className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10"
        to="/"
      >
        <img src="/img/logo.svg" className="h-8" alt="" />
        <span className="text-4xl tracking-tighter font-rounded">
          <strong className="font-normal text-[#b2404b]">magic</strong>
          <strong className="font-thin text-[#81b540]">food</strong>
        </span>
      </Link>
      <div className="w-full max-w-xl p-6 space-y-8 bg-white rounded-lg shadow sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Sign in to platform
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your username
            </label>
            <input
              type="text"
              name="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
              placeholder="Username"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5"
              placeholder="••••••••"
              onChange={handleChange}
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
