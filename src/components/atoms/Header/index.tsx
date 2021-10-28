import React from 'react';
import './styles.scss';

interface ILabel {
  value: string;
  size: string;
}

export const Header: React.FC<ILabel> = ({ value, size }) => {
  return (
    <header className={'header-text'} style={{ fontSize: `${size}px` }}>
      {value}
    </header>
  );
};
