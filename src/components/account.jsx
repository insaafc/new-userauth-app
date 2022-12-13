import React from "react";
import { UserAuth } from "../context/Auth-context";
import { useNavigate } from "react-router-dom";

function account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold py-4">Account</h1>
      {/* pass user into auth context in order to access it on the page  */}
      <p>User email: {user && user.email}</p>
      <button onClick={handleLogout} className="border px-6 py-2 my-4">
        Logout
      </button>
    </div>
  );
}

export default account;
