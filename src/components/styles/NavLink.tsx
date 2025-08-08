import React from 'react';
import './NavLink.css';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      className="nav-link"
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavLink;
