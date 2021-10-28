import React from 'react';
import male from '../../../assets/malePhoto.svg';

interface IPhotoLogo {
  size: string;
}

export const ProfilePhoto: React.FC<IPhotoLogo> = ({ size }) => {
  return <img src={male} style={{ width: `${size}px` }} />;
};
