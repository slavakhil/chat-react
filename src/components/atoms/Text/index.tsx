import React from 'react';
import './styles.scss';

interface ILabel {
  value: string;
  size: string;
  color?: string;
}

export const Text: React.FC<ILabel> = ({ value, size, color }) => {
  return (
    <span className={'text-text'} style={{ fontSize: `${size}px`, color: `${color}` }}>
      {value}
    </span>
  );
};
