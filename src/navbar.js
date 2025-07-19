import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/Main_Logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "#", label: "Solutions", hasDropdown: true },
    { to: "/about", label: "About Us" },
    { to: "/journey", label: "Be a Part of Our Journey" },
    { to: "/contact", label: "Contact Us" },
  ];

  const solutionsDropdown = [
    {
      to: "/solutions/AIConsulting",
      label: "AI Consulting",
      submenu: [
        {
          to: "/solutions/AIConsulting/AIstrategy",
          label: "AI Strategy - Development & Implementation",
        },
        {
          to: "/solutions/AIConsulting/customAI-development",
          label: "Custom AI Development",
        },
        {
          to: "/solutions/AIConsulting/genAI-development",
          label: " Generative AI Development & Services",
        },
        { to: "/solutions/AIConsulting/agenticAI", label: "Agentic AI" },
        {
          to: "/solutions/AIConsulting/ethicalAI-compliance",
          label: "Ethical AI and Compliance",
        },
        {
          to: "/solutions/AIConsulting/AI-research",
          label: "AI Research & Training",
        },
      ],
    },
    {
      to: "/solutions/business-technology",
      label: "Business and Technology Consulting",
      submenu: [
        {
          to: "/solutions/business-technology/microsoft",
          label: "Microsoft-related Services",
        },
        {
          to: "/solutions/business-technology/website-design",
          label: "Website Design & Development",
        },
        {
          to: "/solutions/business-technology/cloud-solutions",
          label: "Cloud Solutions",
        },
        {
          to: "/solutions/business-technology/cybersecurity",
          label: "Cybersecurity",
        },
        {
          to: "/solutions/business-technology/strategy-digitalTransformation",
          label: "Strategy & Digital Transformation",
        },
        {
          to: "/solutions/business-technology/risk-compliance",
          label: "Governance, Risk & Compliance",
        },
      ],
    },
    {
      to: "/solutions/digital-marketing",
      label: "Digital Marketing",
      submenu: [
        {
          to: "/solutions/digital-marketing/demand-generation",
          label: "Demand Generation & Sales Pipelines",
        },
        { to: "/solutions/digital-marketing/seo", label: "SEO" },
        {
          to: "/solutions/digital-marketing/smm",
          label: "Social Media Marketing (SMM)",
        },
        {
          to: "/solutions/digital-marketing/content-marketing",
          label: "Email & Content Marketing",
        },
        {
          to: "/solutions/digital-marketing/video-marketing",
          label: "Video Marketing",
        },
        {
          to: "/solutions/digital-marketing/influencer-marketing",
          label: "Influencer Marketing",
        },
      ],
    },
    {
      to: "#",
      label: "Case Studies",
      submenu: [
        {
          to: "/solutions/casestudies/redingtongulf",
          label: "Redington- Gulf",
        },
        {
          to: "/solutions/casestudies/microsoft",
          label: "Microsoft UAE - D365 Campaign",
        },
        {
          to: "/solutions/casestudies/microsoftksa",
          label: "Microsoft KSA",
        },
        {
          to: "/solutions/casestudies/qatar",
          label: "Mannai- ǫatar",
        },
      ],
    },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const NavbarContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-[85px]">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <img src={logo} className="h-16 w-48" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6 h-full">
            {navItems.map((item) => (
              <li key={item.to} className={`relative group`}>
                <Link
                  to={item.to}
                  className={`flex items-center h-[85px] px-4 text-md font-semibold transition-all duration-300 ${
                    isActive(item.to)
                      ? "text-[#D66CAE] font-bold"
                      : "text-white hover:text-[#D66CAE]"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown only for Solutions */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-0 hidden group-hover:block bg-white shadow-lg py-2 min-w-[250px] z-50">
                    {solutionsDropdown.map((dropdownItem) => (
                      <div
                        key={dropdownItem.to}
                        className="relative group/submenu"
                      >
                        <Link
                          to={dropdownItem.to}
                          className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-purple-600 transition-colors duration-200"
                        >
                          {dropdownItem.label}
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>

                        {/* Submenu */}
                        <div className="absolute left-full top-0 hidden group-hover/submenu:block bg-white shadow-lg py-2 min-w-[280px] z-60">
                          {dropdownItem.submenu.map((subItem) => (
                            <Link
                              key={subItem.to}
                              to={subItem.to}
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-purple-600 transition-colors duration-200"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
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
      {/* Original Navbar (fixed at top) */}
      {lastScrollY <= 10 && (
        <nav className="fixed top-0 left-0 w-full bg-[#482A7A]/80 backdrop-blur-md shadow-xl z-40 border-b border-white/10">
          <NavbarContent />
        </nav>
      )}

      {/* Scrolling Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 to-[#B31F7E] backdrop-blur-md shadow-xl z-50 border-b border-white/10 transform transition-all duration-500 ease-in-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <NavbarContent />
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && isVisible && (
        <div className="md:hidden fixed top-[85px] left-0 w-full backdrop-blur-lg bg-gradient-to-r from-purple-600 to-[#B31F7E] py-4 px-4 space-y-2 shadow-inner z-50 transition-all duration-500 ease-in-out animate-fade-in">
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
