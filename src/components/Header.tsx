import React, { useState } from 'react';
import HeaderContainer from './styles/HeaderContainer';
import Logo from './styles/Logo';
import NavMenu from './styles/NavMenu';
import NavLink from './styles/NavLink';
import HamburgerMenu from './styles/HamburgerMenu';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>My Portfolio</Logo>
      <div className="header-right">
        <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen} />
      </div>
      <NavMenu isOpen={isMenuOpen}>
        <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
        <NavLink href="#about" onClick={closeMenu}>About</NavLink>
        <NavLink href="#experience" onClick={closeMenu}>Experience</NavLink>
        <NavLink href="#projects" onClick={closeMenu}>Projects</NavLink>
        <NavLink href="#testimonials" onClick={closeMenu}>Testimonials</NavLink>
        <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
        <div className="nav-theme-toggle">
          <ThemeToggle />
        </div>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
