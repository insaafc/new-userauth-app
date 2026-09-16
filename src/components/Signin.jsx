import React, { useState } from "react";
import { UserAuth } from "../context/Auth-context";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const { signIn, googleSignIn } = UserAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

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

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm bg-white rounded-[2rem] shadow-xl overflow-hidden">
        <div className="bg-blue-800 h-32 flex items-center justify-center rounded-b-[2.5rem]">
          
        </div>

        <div className="px-8 py-8 border-b border-gray-200">
          <h1 className="text-xl mt-10 font-bold text-center text-gray-800 mb-6">
            Sign In
          </h1>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="login@abcd.com"
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg py-3 mt-2 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">Or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleGoogleSignIn}
              aria-label="Sign in with Google"
              className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.14-4.07 1.14-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.64H1.29A11.96 11.96 0 000 12c0 1.93.46 3.76 1.29 5.36l3.98-3.09z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.64l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
                />
              </svg>
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Dont have an account yet?{" "}
            <Link to="/Signup" className="font-semibold text-blue-800 underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
