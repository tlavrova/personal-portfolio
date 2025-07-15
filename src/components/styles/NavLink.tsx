import React from 'react';
import './NavLink.css';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a className="nav-link" href={href}>
      {children}
    </a>
  );
};

export default NavLink;
