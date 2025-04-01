import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthMiddleware = ({ allowedRoles, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get the user's role from localStorage or any other storage mechanism
    const userRole = localStorage.getItem("aadhar"); // Example: "voter" or "admin"

    // Check if the user's role is allowed
    if (!allowedRoles.includes(userRole)) {
      // Redirect to login or unauthorized page
      navigate("/");
    }
  }, [allowedRoles, navigate]);

  return <>{children}</>;
};

export default AuthMiddleware;