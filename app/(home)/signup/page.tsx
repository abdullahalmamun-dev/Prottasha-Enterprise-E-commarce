"use client";

import Image from "next/image";
import bg from "../../../src/Assets/signupbg.png";
import { Navbar } from "../components/navbar/Navbar";
import { Jost } from "next/font/google";
import googleicon from "../../../src/Assets/google.png";
import Footer from "../components/footer/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

export default function SignUp() {
  return (
    <div className="bg-white">
      <div
        className={`h-full p-4 bg-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${jost.className}`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8">
          {/* Left Section - Image */}
          <div className="md:w-2/3 hidden md:block">
            <Image
              alt="Prottasha Enterprise"
              width={500}
              height={500}
              src={bg}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Right Section - Form */}
          <div className="md:w-1/2 w-full px-4 py-8 md:py-0 md:px-12">
            <h1
              className={`text-3xl font-bold text-[#131118] mb-4 ${jost.className}`}
            >
              Create New Account{" "}
            </h1>
            <p className="text-gray-600 mb-6">Please enter your details</p>

            {/* Login Form */}
            <form action="" method="POST" className="space-y-4">
              {/* First Name Input */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                  placeholder="Enter your first name"
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Last Name Input */}
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                  placeholder="Enter your last name"
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  required
                  placeholder="Confirm your password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms-and-conditions"
                  name="terms-and-conditions"
                  required
                  className="h-[18px] w-[18px] text-blue-600 border-gray rounded focus:ring-blue-500 focus:ring-opacity-[0.5]"
                />
                <label
                  htmlFor="terms-and-conditions"
                  className={`ml-[10px] text-sm text-[#8A8A8A] ${jost.className}`}
                >
                  Agree to our terms & conditions.
                </label>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium shadow-md"
              >
                Sign Up
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google Sign-In Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 px-4 rounded-md shadow-md hover:bg-gray-100 transition duration-200 font-medium text-gray-700"
            >
              <Image
                src={googleicon} // Replace with the path to your Google icon
                alt="Google Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
