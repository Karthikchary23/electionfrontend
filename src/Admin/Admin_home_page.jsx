import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin_Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Disable right-click
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    const disableKeys = (e) => {
      if (
        e.key === "F12" || // Disable F12
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Disable Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key === "C") || // Disable Ctrl+Shift+C
        (e.ctrlKey && e.shiftKey && e.key === "J") || // Disable Ctrl+Shift+J
        (e.ctrlKey && e.key === "U") // Disable Ctrl+U
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableKeys);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
      document.removeEventListener("keydown", disableKeys);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Admin Dashboard</h1>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Voters</h2>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Candidates</h2>
          <p className="text-2xl font-bold">56</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Votes</h2>
          <p className="text-2xl font-bold">789</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/addcandidate")}
          className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white font-medium rounded-lg text-lg px-5 py-3"
        >
          Add Candidate
        </button>
        <button
          onClick={() => navigate("/position")}
          className="bg-gradient-to-br from-green-600 to-teal-500 hover:bg-gradient-to-bl text-white font-medium rounded-lg text-lg px-5 py-3"
        >
          Manage Positions
        </button>
        <button
          onClick={() => navigate("/results")}
          className="bg-gradient-to-br from-red-600 to-orange-500 hover:bg-gradient-to-bl text-white font-medium rounded-lg text-lg px-5 py-3"
        >
          View Results
        </button>
        <button
          onClick={() => navigate("/aadharbyadmin")}
          className="bg-gradient-to-br from-yellow-600 to-amber-500 hover:bg-gradient-to-bl text-white font-medium rounded-lg text-lg px-5 py-3"
        >
          Manage Voters
        </button>
        <button
          onClick={() => navigate("/addadmin")}
          className="bg-gradient-to-br from-pink-600 to-rose-500 hover:bg-gradient-to-bl text-white font-medium rounded-lg text-lg px-5 py-3"
        >
          Add Admin
        </button>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <ul className="bg-gray-800 p-4 rounded-lg shadow-md">
          <li className="mb-2">New voter registered: John Doe</li>
          <li className="mb-2">Candidate added: Jane Smith</li>
          <li className="mb-2">Position updated: Mayor</li>
        </ul>
      </div>
    </div>
  );
}