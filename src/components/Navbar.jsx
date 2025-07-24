import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

/**
 * Navbar component for navigation
 *
 * @author Alex
 * @description Fixed top navbar with animated hamburger menu on mobile
 * @returns JSX.Element
 */

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="bg-box text-text fixed top-0 left-0 w-full h-16 z-50 shadow-lg flex items-center px-4 justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl">Music App</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="flex flex-row gap-8 text-2xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/templatePage">About</Link>
            </li>
            <li>
              <Link to="/plan">Albums</Link>
            </li>
            <li>
              <Link to="/explore">Lists</Link>
            </li>
          </ul>
        </div>

        {/* Right-side buttons */}
        <div className="hidden md:flex gap-2">
          <button
            className="bg-gray-700 text-text px-4 py-2 rounded-lg hover:bg-button-hover"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="bg-blue-700 text-text px-4 py-2 rounded-lg hover:bg-button-hover"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Hamburger (mobile only) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-8 h-6 focus:outline-none"
          >
            <span
              className={`h-1 bg-text rounded transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-1 bg-text rounded transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-1 bg-text rounded transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden text-text fixed top-16 left-0 w-full bg-box shadow-md z-40 flex flex-col items-center gap-4 py-4 text-xl">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/plan" onClick={() => setMenuOpen(false)}>
            Albums
          </Link>
          <Link to="/explore" onClick={() => setMenuOpen(false)}>
            Lists
          </Link>
          <button
            className="bg-gray-700 text-text px-4 py-2 rounded-lg hover:bg-button-hover"
            onClick={() => {
              setMenuOpen(false);
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            className="bg-blue-700 text-text px-4 py-2 rounded-lg hover:bg-button-hover"
            onClick={() => {
              setMenuOpen(false);
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      )}
    </>
  );
}
