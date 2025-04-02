import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function LoadPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="font-bold text-xl sm:text-2xl whitespace-nowrap">
              Election Management
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-4">
            <ul className="flex flex-row gap-2 lg:gap-4">
              <li>
                <Link
                  to="/admin_login"
                  className="px-3 py-2 rounded-md text-sm lg:text-base hover:bg-gray-700 hover:font-bold transition-all duration-200"
                >
                  Admin
                </Link>
              </li>
              <li>
                <Link
                  to="/voter_registration"
                  className="px-3 py-2 rounded-md text-sm lg:text-base hover:bg-gray-700 hover:font-bold transition-all duration-200"
                >
                  Voter Register
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm lg:text-base hover:bg-gray-700 hover:font-bold transition-all duration-200"
                >
                  Voter Login
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="px-3 py-2 rounded-md text-sm lg:text-base hover:bg-gray-700 hover:font-bold transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <ul className="flex flex-col px-2 pt-2 pb-3 space-y-1">
            <li>
              <Link
                to="/admin_login"
                className="block px-3 py-2 rounded-md text-base hover:bg-gray-700 hover:font-bold transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                to="/voter_registration"
                className="block px-3 py-2 rounded-md text-base hover:bg-gray-700 hover:font-bold transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Voter Register
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base hover:bg-gray-700 hover:font-bold transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Voter Login
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base hover:bg-gray-700 hover:font-bold transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LoadPage;