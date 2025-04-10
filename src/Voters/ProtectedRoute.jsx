import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutevoter({ children }) {
  const aadhar = localStorage.getItem("aadhar");

  if (!aadhar) {
    // Redirect to login page if aadhar is not present
    return <Navigate to="/" />;
  }
  else
  {
    return <Navigate to="/voterhomepage" />;
  }

  // Render the protected component if aadhar is present
  return children;
}