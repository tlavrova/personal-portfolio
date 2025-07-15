import React, { useState } from 'react';
import HeaderContainer from './styles/HeaderContainer';
import Logo from './styles/Logo';
import NavMenu from './styles/NavMenu';
import NavLink from './styles/NavLink';
import HamburgerMenu from './styles/HamburgerMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>My Portfolio</Logo>
      <HamburgerMenu onClick={toggleMenu} />
      <NavMenu isOpen={isMenuOpen}>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
