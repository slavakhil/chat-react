import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IUser } from '../../pages/Chat';
import { Header } from '../../atoms/Header';
import { ProfilePhoto } from '../../atoms/ProfilePhoto';
import { Text } from '../../atoms/Text';
import './styles.scss';

interface IDialogItem {
  user: IUser;
  setSelectedDialog: React.Dispatch<React.SetStateAction<number>>;
}

export const DialogItem: React.FC<IDialogItem> = ({ user, setSelectedDialog }) => {
  const [flagMyMessage, setFlagMyMessage] = useState('');
  useEffect(() => {
    if (user.messages[0].isMyMessage === 'message-mine') setFlagMyMessage('You: ');
    else setFlagMyMessage('');
  }, [user.messages]);
  return (
    <>
      <NavLink
        to={'/chat/' + user.id}
        style={{ textDecoration: 'none' }}
        onClick={() => setSelectedDialog(user.id - 1)}
      >
        <div className={'dialog'}>
          <ProfilePhoto size={'48'} />
          <div className={'dialog-name'}>
            <Header value={user.name} size={'15'} />
          </div>
          <div className={'dialog-message'}>
            <Text value={flagMyMessage} size={'14'} color={'#5E93E7'} />
            <Text value={user.messages[0].message} size={'14'} />
          </div>
        </div>
      </NavLink>
    </>
  );
};
