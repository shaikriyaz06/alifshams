import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ALIF</h3>
            <p className="text-gray-300 mb-4">
              Transforming ideas into reality through innovation and excellence in technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-[#B31F7E] transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-[#B31F7E] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-[#B31F7E] transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-[#B31F7E] transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#B31F7E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-[#B31F7E] transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#B31F7E] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#B31F7E] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Digital Transformation</li>
              <li className="text-gray-300">Cloud Solutions</li>
              <li className="text-gray-300">AI & Machine Learning</li>
              <li className="text-gray-300">Cybersecurity</li>
              <li className="text-gray-300">IoT Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                123 Tech Street
                <br />
                Silicon Valley, CA 94025
              </p>
              <p className="text-gray-300">
                Phone: +1 (555) 123-4567
              </p>
              <p className="text-gray-300">
                Email: info@alif.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} ALIF. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 text-sm hover:text-[#B31F7E] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 text-sm hover:text-[#B31F7E] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 