import React from 'react';
import { Link } from 'react-router-dom';

// Sample Translation Data
const translations = {
  en: {
    login: "Login",
    signup: "Signup",
    enterApp: "Enter App",
  },
  bn: {
    login: "লগইন",
    signup: "সাইন আপ",
    enterApp: "অ্যাপে প্রবেশ করুন",
  },
  hi: {
    login: "लॉगिन",
    signup: "साइनअप",
    enterApp: "ऐप दर्ज करें",
  }
};

const Navbar = ({ language, onLanguageChange }) => {
  const t = translations[language]; // Current translations

  return (
    <nav className="bg-black text-white sticky top-0 z-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="./assets/logo.png"
              alt="Khan Abhilekh Logo"
              className="h-12 w-auto"
            />
          </div>

          <div className="flex items-center space-x-8">
            {/* Language Dropdown */}
            <div className="ml-4">
              <select
                value={language}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="bg-black text-white border border-white px-3 py-1 rounded-md"
              >
                <option value="en">English</option>
                <option value="bn">বাংলা</option>
                <option value="hi">हिन्दी</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <button className="border border-white text-white px-10 py-2 rounded-md transition-colors duration-300 hover:bg-white hover:text-black">
                  {t.login}
                </button>
              </Link>
              <Link to="/signup">
                <button className="border border-white text-white px-10 py-2 rounded-md transition-colors duration-300 hover:bg-white hover:text-black">
                  {t.signup}
                </button>
              </Link>
              {/* Enter App Button */}
              <Link to="/home">
                <button className="border border-white text-white px-10 py-2 rounded-md transition-colors duration-300 hover:bg-white hover:text-black">
                  {t.enterApp}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;