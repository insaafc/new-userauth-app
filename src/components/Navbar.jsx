import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/Auth-context";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar-grey w-full p-4">
      <h1 className="text-left text-2xl font-bold">Firebase Google Auth</h1>
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <p>
          <Link style={{ color: "#fff" }} to="/signin">
            Sign in
          </Link>
        </p>
      )}
    </div>
  );
};

export default Navbar;
