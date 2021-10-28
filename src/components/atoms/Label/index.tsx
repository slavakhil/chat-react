import React from 'react';
import './styles.scss';

interface ILabel {
  value: string;
  size: string;
  id?: string;
}

export const Label: React.FC<ILabel> = ({ value, size, id }) => {
  return (
    <label className={'label-text'} htmlFor={id} style={{ fontSize: `${size}px` }}>
      {value}
    </label>
  );
};
