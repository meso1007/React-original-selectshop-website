import React, { useState } from "react";
import Header from "../Compo/Header";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <>
      <Header />
      <div className="h-screen overflow-hidden flex items-center justify-center bg-gray-100">
        <div className="w-full md:w-2/5 h-full px-20 bg-white p-10 shadow-lg flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-gray-900 mb-3">
              Create an account
            </h2>
            <p className="text-gray-400">Please enter your details</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
                className="w-full px-2 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition duration-300"
                required
              />
            </div>
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
            <div>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm Password"
                className="w-full px-2 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-700 placeholder-gray-400 transition duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="w-full mt-4 bg-white border border-black text-gray-900 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-200 focus:outline-none transition duration-300"
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-gray-700 underline">
              Log in
            </a>
          </p>
        </div>
        <div className="w-1/2 h-full relative hidden md:block">
          <img
            src="./assets/photos/signupphoto.jpeg"
            className="w-full h-full object-cover"
            alt="Sign Up"
            style={{ objectPosition: "center right" }}
          />
          <div className="absolute logo_font bottom-5 left-5 text-white text-4xl font-bold">
            sunpoo
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
