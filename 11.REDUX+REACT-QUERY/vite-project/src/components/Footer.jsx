import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-4 py-8 bg-gray-700 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-lg font-semibold mb-2 text-gray-300 hover:text-gray-100 transition-colors duration-300 ease-in-out">
              Contact Us
            </h3>
            <p className="text-sm mb-2">
              Have questions? We'd love to hear from you.
            </p>
            <p className="text-sm mt-2 flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2 animate-pulse" /> Email:
              support@yourcompany.com
            </p>
            <p className="text-sm flex items-center justify-center md:justify-start">
              <FaPhone className="mr-2 animate-pulse" /> Phone: (123) 456-7890
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-lg font-semibold mb-2 text-gray-300 hover:text-gray-100 transition-colors duration-300 ease-in-out">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-gray-400 transition-colors duration-300 ease-in-out"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-lg font-semibold mb-2 text-gray-300 hover:text-gray-100 transition-colors duration-300 ease-in-out">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300 ease-in-out transform hover:scale-110"
              >
                <FaFacebookF className="transition-transform duration-300 ease-in-out transform hover:rotate-12" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300 ease-in-out transform hover:scale-110"
              >
                <FaTwitter className="transition-transform duration-300 ease-in-out transform hover:rotate-12" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300 ease-in-out transform hover:scale-110"
              >
                <FaInstagram className="transition-transform duration-300 ease-in-out transform hover:rotate-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center  bg-gray-900 text-white py-4">
        <p className="text-sm">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
