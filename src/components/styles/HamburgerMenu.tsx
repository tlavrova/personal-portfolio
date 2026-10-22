import React from 'react';
import './HamburgerMenu.css';

interface HamburgerMenuProps {
  onClick: () => void;
  isOpen: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick, isOpen }) => {
  return (
    <button
      type="button"
      className={`hamburger-menu ${isOpen ? 'active' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="main-nav"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default HamburgerMenu;
