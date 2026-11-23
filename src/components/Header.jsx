import React from "react";
import { useState } from "react";
import logo from "../assets/docgenai.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-surface-border/60 bg-surface/90 px-4 py-4 backdrop-blur-sm sm:px-6 md:px-10 lg:px-16">
      {/* Logo Section */}
      <div className="flex items-center gap-2.5">
        <img
          src={logo}
          alt="docgenai"
          width="50"
          className="flex h-8 w-8 rounded-md"
        />
        <span className="text-lg font-bold tracking-tight">DocGenAi</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden gap-9 md:flex">
        <a
          href="#how-it-works"
          className="text-sm text-gray-300 transition hover:text-white"
        >
          How It Works
        </a>
        <a
          href="#documents"
          className="text-sm text-gray-300 transition hover:text-white"
        >
          Documents
        </a>
        <a
          href="#pricing"
          className="text-sm text-gray-300 transition hover:text-white"
        >
          Pricing
        </a>
      </nav>

      {/* Buttons and Mobile Menu */}
      <div className="flex items-center gap-2 sm:gap-4">
        <a
          href="#signin"
          className="bg-brand border border-surface-border/60 rounded-lg px-3 py-2 text-xs font-semibold transition hover:bg-brand-dark sm:px-4 sm:text-sm"
        >
          Sign In
        </a>

        <a
          href="#signup"
          className="border border-surface-border/60 rounded-lg px-3 py-2 text-xs font-semibold transition hover:bg-brand-dark sm:px-4 sm:text-sm"
        >
          Sign Up
        </a>

        {/* Mobile Hamburger Button */}
        <button
          id="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-1 text-gray-300 md:hidden focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div id="mobile-dropdown" className={`${isMenuOpen ? "block" : "hidden"} absolute top-full left-0 w-full border-b border-surface-border/60 bg-surface px-6 py-4 md:hidden`}>
        <nav className="flex flex-col gap-4">
          <a  href="#how-it-works" className="text-sm text-gray-300 transition hover:text-white">How It Works</a>

          <a href="#documents" className="text-sm text-gray-300 transition hover:text-white">Documents</a>
          
          <a href="#pricing" className="text-sm text-gray-300 transition hover:text-white">Pricing</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
