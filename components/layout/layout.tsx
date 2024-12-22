"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("/home");

  const navItems = [
    { path: "/home", label: "Lifestyle & Home" },
    { path: "/beauty-and-wellness", label: "Beauty & Wellness" },
    { path: "/technology", label: "Technology" },
    { path: "/finance", label: "Finance" },
    { path: "/deals", label: "Deals" },
  ];

  const onRoute = (path: string) => {
    router.push(`${path}`);
  };

  return (
    <div>
      {/* Navbar Section */}
      <nav className="bg-white text-black shadow-md">
        <div className="flex justify-between items-center h-16 px-4">
          {/* Logo Section */}
          <div className="flex-shrink-0 pl-3">
            <a href="/">
              <img src="/itk.png" alt="MyLogo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Navigation Section */}
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                className={`cursor-pointer text-center font-semibold hover:text-orange-500 focus:outline-none ${
                  item.path === active ? "text-orange-500" : ""
                }`}
                aria-current={item.path === active ? "page" : undefined}
                onClick={() => {
                  setActive(item.path);
                  onRoute(item.path);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-600 hover:text-orange-500 focus:outline-none focus:ring"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <button
                    className={`block w-full text-left font-semibold hover:text-orange-500 ${
                      item.path === active ? "text-orange-500" : ""
                    }`}
                    onClick={() => {
                      setActive(item.path);
                      onRoute(item.path);
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Children Section */}
      <main className="p-10">{children}</main>
    </div>
  );
};

export default Container;
