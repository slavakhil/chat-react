import React from 'react';
import logo from '../../../assets/logo.svg';
import './styles.scss';
import { Header } from '../../atoms/Header';

export const WelcomeField: React.FC = () => {
  return (
    <div className="block-welcomefield">
      <div>
        <img src={logo} />
      </div>
      <Header value="Wellcome to Chatty!" size="42" />
    </div>
  );
};
