import React, { useState } from "react";
import Header from "../Compo/Header";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <>
      <Header />
      <div className="h-screen overflow-hidden flex items-center justify-center bg-gray-100">
        <div className="w-1/2 h-full relative hidden md:block">
          <img
            src="./assets/photos/loginphoto3.jpeg"
            className="w-full h-full object-cover"
            alt="Login"
            style={{ objectPosition: "center right" }}
          />
          <div className="absolute logo_font bottom-5 left-5 text-white text-4xl font-bold">
            sunpoo
          </div>
        </div>

        <div className="w-full md:w-2/5 h-full px-20 bg-white p-10 shadow-lg flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-gray-900 mb-3">
              Login to your account{" "}
            </h2>
            <p className="text-gray-400">Please enter your details</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                className="w-full px-2 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition duration-300"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                className="w-full px-2 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-700 placeholder-gray-400 transition duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300"
            >
              Log in
            </button>
            <button
              type="button"
              className="w-full mt-4 bg-white border border-black text-gray-900 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-200 focus:outline-none transition duration-300"
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-gray-700 underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
export default Login;
