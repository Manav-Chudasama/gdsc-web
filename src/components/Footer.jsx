import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#F8F9FA]">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link to="/" className="text-base leading-6 hover:text-blue-700">
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="our-team"
              className="text-base leading-6 hover:text-blue-700"
            >
              Our Team
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="events"
              className="text-base leading-6 hover:text-blue-700"
            >
              Events
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="gallery"
              className="text-base leading-6 hover:text-blue-700"
            >
              Gallery
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="contact-us"
              className="text-base leading-6 hover:text-blue-700"
            >
              Contact us
            </Link>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {/* Phone Icon */}
          <a href="tel:+1234567890" className="hover:text-green-600">
            <span className="sr-only">Phone</span>
            <FaPhoneAlt className="w-6 h-6" />
          </a>

          {/* Email Icon */}
          <a href="mailto:someone@example.com" className="hover:text-red-600">
            <span className="sr-only">Email</span>
            <FaEnvelope className="w-6 h-6" />
          </a>

          {/* Facebook Icon */}
          <a href="https://www.facebook.com" className="hover:text-blue-700">
            <span className="sr-only">Facebook</span>
            <FaFacebookF className="w-6 h-6" />
          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com" className="hover:text-blue-500">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          Copyright ©DJSCE-GDSC. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
