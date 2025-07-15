import React from 'react';
import './Logo.css';

interface LogoProps {
  children: React.ReactNode;
}

const Logo: React.FC<LogoProps> = ({ children }) => {
  return (
    <div className="logo">
      {children}
    </div>
  );
};

export default Logo;
