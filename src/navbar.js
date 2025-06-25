import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/Logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/solutions", label: "Solutions" },
    { to: "/about", label: "About Us" },
    { to: "/journey", label: "Be a Part of Our Journey" },
    { to: "/contact", label: "Contact Us" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        // Show dynamic navbar when scrolled past 100px
        setIsVisible(true);
      } else {
        // Hide dynamic navbar when at the top
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const OriginalNavbarContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-[85px]">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <img src={logo} className="h-20 w-auto" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-white text-md font-semibold px-4 py-2 transition-all duration-300 ${
                isActive(item.to)
                  ? "!text-[#D66CAE] font-bold "
                  : "hover:text-[#D66CAE]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 transition duration-200"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  const DynamicNavbarContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-[85px]">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <img src={logo} className="h-20 w-auto" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-md font-semibold px-4 py-2 transition-all duration-300 ${
                isActive(item.to)
                  ? "!text-black font-bold "
                  : "text-white hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 transition duration-200"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Original Fixed Navbar - Always Visible */}
      <nav className="fixed top-0 left-0 w-full bg-[#482A7A]/80 backdrop-blur-md shadow-xl z-40 border-b border-white/10">
        <OriginalNavbarContent />
      </nav>

      {/* Dynamic Gradient Navbar - Appears on Scroll */}
      <nav 
        className={`fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 to-[#B31F7E] backdrop-blur-md shadow-xl z-50 border-b border-white/10 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <DynamicNavbarContent />
      </nav>

      {/* Mobile Menu - Only for dynamic navbar */}
      {isMenuOpen && isVisible && (
        <div className="md:hidden fixed top-[85px] left-0 w-full backdrop-blur-lg bg-gradient-to-r from-purple-600 to-[#B31F7E] py-4 px-4 space-y-2 shadow-inner z-50">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive(item.to)
                  ? "bg-white text-black font-bold shadow-md"
                  : "hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
