// MobileMenuToggle.tsx
import React from 'react';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ isOpen, onToggle }) => (
  <button
    onClick={onToggle}
    className="md:hidden my-3 ml-8 z-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
      />
    </svg>
  </button>
);

export default MobileMenuToggle;