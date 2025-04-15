// SidebarMobileMenu.tsx
import React, { useState, useEffect, useRef } from "react";
import MobileMenu from "../MobileMenu";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/dreamersdontstop.svg";
import NavStore from "../NavStore";
import Header from "./Header";

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

interface User {
  name: string;
  email: string;
  avatar: string;
}

const user: User = {
  name: "🍄 FUNGI BROTHERS",
  email: "contacto@fungibrothers.com",
  avatar: "https://www.creativefabrica.com/wp-content/uploads/2023/02/11/Galaxy-Astronaut-Monkey-Painting-60761789-1.png",
};

const menuItems: Item[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Productos",
    subItems: [
      { label: "CORDYCEPS", href: "/store/catalogo" },
      { label: "MELENA DE LEÓN", href: "/store/catalogo" },
      { label: "REISHI", href: "/store/catalogo" },
      { label: "COMBO TRÍADA", href: "/store/catalogo" },
    ],
  },
  {
    label: "Sobre Nosotros",
    href: "/store/nosotros",
  },
  {
    label: "Conocé Más",
    href: "/store/info",
  },
  {
    label: "Contacto",
    href: "/store",
  },
];

const SidebarMobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div className="hidden md:block">
        <NavStore menuItems={menuItems} />
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-opacity-75 z-50">
          <div style={{
        background: "radial-gradient(circle at bottom left, #1e293b 0%, #0f172a 40%, #000000 100%)",
      }} className="fixed inset-y-0 left-0 w-64 shadow-lg" ref={menuRef}>
            <div className="px-6 flex items-center justify-between h-20 p-4 border-b border-gray-700">
              <Button variant="outline" size="icon" aria-label="Home">
                {/* <img src={Logo} className="size-9 fill-foreground" alt="Logo" /> */}🍄
              </Button>
              <button
                onClick={toggleMenu}
                className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <MobileMenu items={menuItems} user={user} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMobileMenu;