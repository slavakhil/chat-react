import React from 'react';
import { Logo } from '../../atoms/Logo';
import './styles.scss';

export const HeaderNav: React.FC = () => {
  return (
    <header className={'headerNav'}>
      <Logo size={'83'} />
    </header>
  );
};
