// Header.tsx
import React from 'react';
import MobileMenuToggle from './MobileMenuToggle';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => (
  <header className="lg:px-16 px-4 bg-gray flex flex-wrap items-center py-4 shadow-md">
    <div className="md:hidden flex-1 flex justify-between items-center">
      <MobileMenuToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
    </div>
  </header>
);

export default Header;