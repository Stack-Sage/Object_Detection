"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaUserCircle, FaRegStar, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default dark mode
  const pathname = usePathname();

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("invert-theme") === "true";
    setIsDark(savedTheme);
    if (savedTheme) {
      document.documentElement.classList.add("invert");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("invert-theme", newTheme);
    document.documentElement.classList.toggle("invert", newTheme);
  };

  return (
    <nav className="bg-gradient-to-t from-black via-gray-950 rounded-md to-slate-950 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative p-2 text-gray-200 hover:bg-black hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Logo & Nav Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavItem text="DashBoard" href="/" active={pathname === "/"} />
                <NavItem text="About" href="/about" active={pathname === "/about"} />
                <NavItem text="Contact" href="/contact" active={pathname === "/contact"} />
              </div>
            </div>
          </div>

          {/* Star, Theme Toggle, and Profile */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:static sm:inset-auto sm:ml-6">
            {/* Star Icon */}
            <button className="relative p-2 text-white-400 hover:text-white">
              <FaRegStar size={20} />
            </button>

            {/* Theme Toggle Button */}
            <button
              className="relative p-2 text-gray-300 hover:text-yellow-500"
              onClick={toggleTheme}
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* Profile Icon */}
            <div className="relative ml-3">
              <button className="flex items-center text-sm focus:outline-none">
                <FaUserCircle size={32} className="text-gray-400 hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavItem text="DashBoard" href="/" active={pathname === "/"} mobile />
            <NavItem text="About" href="/about" active={pathname === "/about"} mobile />
            <NavItem text="Contact" href="/contact" active={pathname === "/contact"} mobile />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ text, href, active, mobile }) => (
  <Link
    href={href}
    className={`block shadow-sm shadow-indigo-500 rounded-md px-3 py-2 text-sm font-bold ${
      active
        ? "bg-indigo-800 text-white font-bold"
        : "text-gray-300 hover:bg-black hover:shadow-md hover:shadow-indigo-400 hover:text-indigo-500"
    } ${mobile ? "text-base" : ""}`}
  >
    {text}
  </Link>
);

export default Navbar;
