import React from 'react';
import { AuthBlock } from '../../organisms/Auth';
import image from '../../../assets/backgroundimage.svg';
import './styles.scss';

export const Auth: React.FC = () => {
  return (
    <div className="container">
      <AuthBlock />
      <img className="image" src={image} />
    </div>
  );
};
