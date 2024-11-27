import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-sm z-50 px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-transparent rounded-full flex items-center justify-center">
              <a href="">
                <img
                  src="https://jrpschool.netlify.app/image2vector.svg"
                  alt="logo"
                  className="w-full h-full"
                />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/JR-Preporatory-School#home"
              className="text-white hover:text-amber-200 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/JR-Preporatory-School#aboutus"
              className="text-white hover:text-amber-200 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/gallery#gallery"
              className="text-white hover:text-amber-200 transition-colors"
            >
              Photo Gallery
            </Link>
            <Link
              to="/contact#contact"
              className="text-white hover:text-amber-200 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/authentication"
              className="bg-amber-100 px-8 py-2 font-bold hover:bg-black hover:text-white border-2 border-amber-100 transition-colors"
            >
              Login
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/JR-Preporatory-School#home"
                className="text-white hover:text-amber-200 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/JR-Preporatory-School#aboutus"
                className="text-white hover:text-amber-200 transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/gallery#gallery"
                className="text-white hover:text-amber-200 transition-colors"
                onClick={toggleMenu}
              >
                Photo Gallery
              </Link>
              <Link
                to="/contact#contact"
                className="text-white hover:text-amber-200 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/authentication"
                className="bg-amber-100 px-8 py-2 font-bold hover:bg-black hover:text-white border-2 border-amber-100 transition-colors inline-block text-center"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;