import React, { useEffect, useState } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/Auth-context";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const { signIn } = UserAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  //import function in order to have access to it
  const { createUser } = UserAuth();

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    //use below so the whole page doesnt submit all the time
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <div className="row">
      <div>
        <div className="col-12">
          <h1 className="text-center text-3l font-bold py-8 pt-4">
            Sign in to your account{" "}
          </h1>
        </div>
        <div className="text-center mx-auto my-16 p-4">
          <div className="">
            <p className="p-2">
              Dont have an account yet?{" "}
              <Link to="/Signup" className="underline">
                Sign up.
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
              Sign In
            </button>
          </form>
        </div>
        <div className="text-center mx-auto my-16 p-4">
          {" "}
          ------------ OR ------------
        </div>
        <div className="text-center mx-auto my-16 p-4 center-button col-12 text-center max-w[240px] m-auto py-4">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </div>
  );
};

export default Signin;
