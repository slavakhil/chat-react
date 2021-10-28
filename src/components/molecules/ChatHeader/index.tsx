import React from 'react';
import { IUser } from '../../pages/Chat';
import { Header } from '../../atoms/Header';
import { Text } from '../../atoms/Text';
import './styles.scss';

interface IChatField {
  user: IUser;
}

export const ChatHeader: React.FC<IChatField> = ({ user }) => {
  return (
    <div id={'chat-title'} className={'chat-header'}>
      <Header value={user.name} size={'20'} />
      <Text value={'Last seen' + ' ' + user.lastOnline} size={'16'} />
    </div>
  );
};
