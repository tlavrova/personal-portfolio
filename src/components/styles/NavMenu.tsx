import React from 'react';
import './NavMenu.css';

interface NavMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ children, isOpen }) => {
  return (
    <nav className={`nav-menu ${isOpen ? 'open' : 'closed'}`}>
      {children}
    </nav>
  );
};

export default NavMenu;
