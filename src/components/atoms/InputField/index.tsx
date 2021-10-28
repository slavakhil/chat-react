import React from 'react';
import './styles.scss';

interface IInputField {
  placeholder: string;
  type: string;
  id: string;
  flag: boolean;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<IInputField> = ({
  placeholder,
  id,
  type,
  flag,
  value,
  handleChange,
}) => {
  return (
    <>
      <input
        className={'text-field__input'}
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required={flag}
      />
    </>
  );
};
