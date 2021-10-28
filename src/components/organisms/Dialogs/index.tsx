import React from 'react';
import { Text } from '../../atoms/Text';
import { DialogItem } from '../../molecules/DialogItem';
import noDialogs from '../../../assets/noDialogs.svg';
import './styles.scss';
import { IUser } from '../../pages/Chat';

interface IDialogs {
  users: IUser[];
  setSelectedDialog: React.Dispatch<React.SetStateAction<number>>;
}

export const Dialogs: React.FC<IDialogs> = ({ users, setSelectedDialog }) => {
  return (
    <div className={'dialogs'}>
      {users.length === 0 && (
        <div className={'dialogs__no-dialogs'}>
          <img src={noDialogs} />
          <Text value={'There is no other users yet'} size={'15'} />
        </div>
      )}
      {users.map((user) => (
        <DialogItem key={user.id} user={user} setSelectedDialog={setSelectedDialog} />
      ))}
    </div>
  );
};
