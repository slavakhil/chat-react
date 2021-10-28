import React from 'react';
import logo from '../../../assets/logo.svg';

interface ILogo {
  size?: string;
}

export const Logo: React.FC<ILogo> = ({ size }) => {
  return <img src={logo} style={{ width: `${size}px` }} />;
};
