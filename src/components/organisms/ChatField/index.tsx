import React from 'react';
import { IUser } from '../../pages/Chat';
import { ChatHeader } from '../../molecules/ChatHeader';
import { ChatInput } from '../../molecules/ChatInput';
import { MessageList } from '../../molecules/MessageList';
import './styles.scss';

interface IChatField {
  user: IUser;
}

export const ChatField: React.FC<IChatField> = ({ user }) => {
  return (
    <div className={'content-chat'}>
      <ChatHeader user={user} />
      <MessageList user={user} />
      <ChatInput />
    </div>
  );
};
