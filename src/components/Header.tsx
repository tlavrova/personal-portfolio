import React, { useEffect, useState } from 'react';
import HeaderContainer from './HeaderContainer';
import Logo from './Logo';
import NavMenu from './NavMenu';
import NavLink from './NavLink';
import HamburgerMenu from './HamburgerMenu';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Highlight the section that crosses the middle of the viewport
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>Tatiana Lavrova</Logo>
      <div className="header-right">
        <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen} />
      </div>
      <NavMenu isOpen={isMenuOpen}>
        {NAV_ITEMS.map(({ id, label }) => (
          <NavLink key={id} href={`#${id}`} onClick={closeMenu} isActive={activeSection === id}>
            {label}
          </NavLink>
        ))}
        <div className="nav-theme-toggle">
          <ThemeToggle />
        </div>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
