import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

interface SubItem {
  label: string;
  href: string;
}

interface Item {
  label: string;
  href?: string;
  type?: "link" | "button";
  subItems?: SubItem[];
  onClick?: () => void;
}

interface HeaderProps {
  menuItems: Item[];
}

const NavStore: React.FC<HeaderProps> = ({ menuItems }) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 500); // <–– tiempo de espera antes de cerrarlo
  };

  return (
    <header className="lg:px-16 px-4 bg-gray flex flex-wrap items-center py-4 shadow-md text-white">
      <div className="flex-1 flex justify-between items-center">
        <h1 className="text-xl font-bold">🍄</h1>
      </div>

      {/* Toggle mobile */}
      <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
        <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden md:flex md:items-center md:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group px-4 py-2"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Dropdown */}
                {item.subItems && item.subItems.length > 0 ? (
                  <>
                    <span className="cursor-pointer block">{item.label}</span>
                    <ul
                      className={`absolute left-0 top-full mt-2 bg-white text-black rounded-md shadow-lg z-20 min-w-[160px] transition-all duration-300 ease-in-out ${
                        activeDropdown === index
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.href || "#"}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : item.href ? (
                  <Link
                    to={item.href}
                    className="block hover:text-gray-400 transition"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="block opacity-50 cursor-not-allowed">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavStore;
