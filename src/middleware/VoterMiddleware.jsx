import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VoterMiddleware = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Get the voter's Aadhar from localStorage
    const aadhar = localStorage.getItem("aadhar");

    // If no Aadhar is found, redirect to the login or home page
    if (!aadhar) {
      alert("You must be logged in as a voter to access this page.");
      navigate("/");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default VoterMiddleware;