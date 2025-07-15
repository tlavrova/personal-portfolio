import React from 'react';
import './HeaderContainer.css';

interface HeaderContainerProps {
  children: React.ReactNode;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ children }) => {
  return (
    <header className="header-container">
      {children}
    </header>
  );
};

export default HeaderContainer;
