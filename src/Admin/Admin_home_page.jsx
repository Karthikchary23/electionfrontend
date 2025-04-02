import React, { useEffect } from "react";

export default function Admin_Homepage() {
  useEffect(() => {
    // Disable right-click
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    // Disable specific key combinations
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
    <div>
      {/* Admin page content */}
      <h1>Welcome to the Admin Dashboard</h1>
    </div>
  );
}