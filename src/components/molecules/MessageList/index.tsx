import React from 'react';
import './styles.scss';
import { Text } from '../../atoms/Text';
import { IUser } from '../../pages/Chat';

interface IMessageItem {
  user: IUser;
}

export const MessageList: React.FC<IMessageItem> = ({ user }) => {
  return (
    <div className={'messages-container'}>
      {user.messages.map((message) => (
        <div className={message.isMyMessage} key={message.message}>
          <Text value={message.message} size={'16'} />
        </div>
      ))}
    </div>
  );
};
