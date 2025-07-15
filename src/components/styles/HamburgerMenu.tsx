import React from 'react';
import './HamburgerMenu.css';

interface HamburgerMenuProps {
  onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
  return (
    <div className="hamburger-menu" onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerMenu;
