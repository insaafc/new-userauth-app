import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Auth-context";

const Account = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("You are logged out");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
      <div>
        <p className="pt-5">Welcome, {user?.displayName}</p>
      </div>
      <p className="pt-3">User Email: {user && user.email}</p>
      <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button>
    </div>
  );
};

export default Account;
