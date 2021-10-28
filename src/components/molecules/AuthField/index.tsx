import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../atoms/Button';
import { Header } from '../../atoms/Header';
import { InputField } from '../../atoms/InputField';
import { Label } from '../../atoms/Label';
import './styles.scss';

export const AuthField: React.FC = () => {
  const [flagUserName, setFlagUserName] = useState<boolean>(true);
  const [flagPassword, setFlagPassword] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [flagButton, setFlagButton] = useState<boolean>(true);

  useEffect(() => {
    if (flagUserName === false && flagPassword === false) setFlagButton(false);
    else setFlagButton(true);
  }, [flagUserName, flagPassword]);

  const clickButton = () => console.log('');

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 3) setFlagUserName(true);
    else setFlagUserName(false);
    setUserName(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 3) setFlagPassword(true);
    else setFlagPassword(false);
    setPassword(e.target.value);
  };
  return (
    <>
      <div className="block-info">
        <Header value={'Please, autorize yourself'} size={'27'} />
      </div>
      <div className="block-field">
        <div className="block-field__label">
          <Label id={'username'} value={'User name'} size={'13'} />
        </div>
        <div className="block-field__input">
          <InputField
            type={'text'}
            id={'username'}
            placeholder={'Input user name'}
            flag={flagUserName}
            value={userName}
            handleChange={handleChangeUserName}
          />
          {flagUserName && <div className="text-field__input--error">Something goes wrong</div>}
        </div>
      </div>
      <div className="block-field">
        <div className="block-field__label">
          <Label id={'password'} value={'Password'} size={'13'} />
        </div>
        <div className="block-field__input">
          <InputField
            type={'password'}
            id={'password'}
            placeholder={'Input password'}
            flag={flagPassword}
            value={password}
            handleChange={handleChangePassword}
          />
          {flagPassword && <div className="text-field__input--error">Something goes wrong</div>}
        </div>
      </div>
      <div className="block-button">
        <NavLink to={'/chat'}>
          <Button id={'buttonLogin'} value={'Log in'} flag={flagButton} clickButton={clickButton} />
        </NavLink>
      </div>
    </>
  );
};
