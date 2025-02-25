import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TrendingUp, MessageCircle } from "lucide-react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <header className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h1 className="text-2xl font-bold text-white ml-2">CANDLE DAY</h1>
            </div>
            <nav className="flex space-x-6">
              <Link
                to="/"
                className={`text-blue-200 hover:text-white transition-colors ${
                  location.pathname === "/" ? "text-white" : ""
                }`}
              >
                Basic Plans
              </Link>
              <Link
                to="/premium"
                className={`text-blue-200 hover:text-white transition-colors ${
                  location.pathname === "/premium" ? "text-white" : ""
                }`}
              >
                Premium Plans
              </Link>
              {/* <Link
                to="/resources"
                className={`text-blue-200 hover:text-white transition-colors ${
                  location.pathname === "/resources" ? "text-white" : ""
                }`}
              >
                Resources
              </Link>
              <Link
                to="/about"
                className={`text-blue-200 hover:text-white transition-colors ${
                  location.pathname === "/about" ? "text-white" : ""
                }`}
              >
                About
              </Link> */}
            </nav>
          </div>
        </div>
      </header>

      {children}

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Layout;
