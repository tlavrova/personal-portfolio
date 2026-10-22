import React from 'react';
import './styles/NavLink.css';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, isActive = false }) => {
  return (
    <a
      className={`nav-link ${isActive ? 'active' : ''}`}
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'location' : undefined}
    >
      {children}
    </a>
  );
};

export default NavLink;
