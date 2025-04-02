import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isAdminLoggedIn', 'false'); // Set admin login status to false
    navigate('/admin_login'); // Redirect to admin login page
  };

  return (
    <nav className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
            <span className="text-xl font-bold">SentinelVote</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/adminhomepage" className="hover:text-gray-400">Home</NavLink>
            <NavLink to="/addadmin" className="hover:text-gray-400">Add Admin</NavLink>
            <NavLink to="/position" className="hover:text-gray-400">Position</NavLink>
            <NavLink to="/addcandidate" className="hover:text-gray-400">Add Candidate</NavLink>
            <NavLink to="/aadharbyadmin" className="hover:text-gray-400">Add Aadhar</NavLink>
            <NavLink to="/results" className="hover:text-gray-400">Results</NavLink>
            <button
              onClick={handleLogout}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col bg-gray-800 p-4 space-y-2">
            <NavLink to="/adminhomepage" className="block p-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/addadmin" className="block p-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Add Admin</NavLink>
            <NavLink to="/position" className="block p-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Position</NavLink>
            <NavLink to="/addcandidate" className="block p-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Add Candidate</NavLink>
            <NavLink to="/aadharbyadmin" className="block p-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Add Aadhar</NavLink>
            <NavLink to="/results" className="block p-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Results</NavLink>
            <button
              onClick={() => { handleLogout(); setIsOpen(false); }} // Close menu on logout
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
