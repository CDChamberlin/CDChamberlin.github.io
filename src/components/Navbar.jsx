'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    ['Home', '/'],
    ['Education', '/education'],
    ['Projects', '/projects'],
    ['Experience', '/experience'],
    ['Contact Me', '/contact'],
  ];

  return (
    <nav className="w-full fixed top-0 z-50 shadow-sm transition-colors duration-300 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Logo Area */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl text-aquamarine-400">
              CDChamberlin
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map(([title, url]) => (
                <Link href={url} key={title}>
                  <button
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors 
                                        text-slate-700 hover:text-sky-600 hover:bg-slate-100 
                                        dark:text-slate-200 dark:hover:text-sky-400 dark:hover:bg-slate-800"
                  >
                    {title}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors
                                text-slate-700 hover:text-sky-600 hover:bg-slate-100
                                dark:text-slate-200 dark:hover:text-sky-400 dark:hover:bg-slate-800"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(([title, url]) => (
              <Link href={url} key={title} onClick={() => setIsOpen(false)}>
                <span
                  className="block px-3 py-2 rounded-md text-base font-medium transition-colors
                                    text-slate-700 hover:text-sky-600 hover:bg-slate-100
                                    dark:text-slate-200 dark:hover:text-sky-400 dark:hover:bg-slate-800"
                >
                  {title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
