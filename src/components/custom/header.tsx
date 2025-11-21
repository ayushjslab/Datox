"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import clsx from "clsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: { name: string; url: string; external?: boolean }[] = [
    { name: "Home", url: "/" },
    { name: "Docs", url: "/docs" },
    {
      name: "Github",
      url: "https://github.com/ayushjslab/jsonly",
      external: true,
    },
    { name: "Contact", url: "/contact" },
    { name: "Blog", url: "/blog" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-transparent backdrop-blur-xl shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-wide text-white hover:text-emerald-400 transition-colors"
        >
          <span className="text-emerald-400">JSON</span>ly
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative font-semibold text-lg cursor-pointer group transition-all"
            >
              {item.external ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {item.name}
                </Link>
              )}

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-emerald-400 transition-all duration-300 group-hover:w-full rounded"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden flex flex-col gap-4 px-6 py-4 text-white transition-all duration-300 overflow-hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {navItems.map((item) => (
          <div key={item.name} className="font-semibold text-lg">
            {item.external ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="hover:text-emerald-400 transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link
                href={item.url}
                onClick={closeMenu}
                className="hover:text-emerald-400 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
