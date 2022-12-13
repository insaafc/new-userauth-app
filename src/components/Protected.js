import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/Auth-context";

// create protected page so that user is not able to go to account page

const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Protected;
