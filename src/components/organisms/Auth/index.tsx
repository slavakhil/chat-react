import React from 'react';
import { AuthField } from '../../molecules/AuthField';
import { WelcomeField } from '../../molecules/WelcomeField/';
import './styles.scss';

export const AuthBlock: React.FC = () => {
  return (
    <div className="auth-block">
      <WelcomeField />
      <AuthField />
    </div>
  );
};
