import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Auth-context";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  //when the page submits we dont want the whole page to submit
  // so we use event so its only submits form

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);

      //after user is created navigates to account page
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="text-center mx-auto my-16 p-4">
      <div className="">
        <h1 className="text-2xl font-bold py-2">Sign up for a free account</h1>
        <p className="p-2">
          Already have an account yet?{" "}
          <Link to="/" className="underline">
            Sign in.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-2">
          <label className="p-2 font-medium">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border"
            type="email"
          />
        </div>
        <div className="flex flex-col p-2">
          <label className="p-2 font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border"
            type="password"
          />
        </div>
        <button className="border border-blue-500 text-primary bg-dark w-full p-2  my-2 text-white">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
