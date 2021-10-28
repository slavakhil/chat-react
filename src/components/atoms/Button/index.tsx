import React from 'react';
import './styles.scss';

interface IButton {
  value: string;
  flag?: boolean;
  id: string;
  clickButton: () => void;
}

export const Button: React.FC<IButton> = ({ value, flag, id, clickButton }) => {
  return (
    <button id={id} className="buttonLogin" onClick={clickButton} disabled={flag}>
      {value}
    </button>
  );
};
