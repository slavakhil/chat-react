import React, { useState } from 'react';
import { Dialogs } from '../../organisms/Dialogs';
import { HeaderNav } from '../../organisms/HeaderNav';
import { ChatField } from '../../organisms/ChatField';
import './styles.scss';
import { Text } from '../../atoms/Text';

interface IMessage {
  message: string;
  isMyMessage: string;
}

export interface IUser {
  id: number;
  name: string;
  messages: IMessage[];
  lastOnline: string;
}

export const Chat: React.FC = () => {
  const [selectedDialog, setSelectedDialog] = useState(-1);
  const [users] = useState<IUser[]>([
    {
      id: 1,
      name: 'Slava Khil',
      messages: [
        { message: 'hello', isMyMessage: 'message-mine' },
        { message: 'and hi to you too!', isMyMessage: 'message-other' },
      ],
      lastOnline: '3 minutes ago',
    },
    {
      id: 2,
      name: 'Anya Andreeva',
      messages: [
        {
          message:
            'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. accusantium doloremque laudantium, totam re',
          isMyMessage: 'message-mine',
        },
        {
          message:
            'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          isMyMessage: 'message-other',
        },
      ],
      lastOnline: 'a hour ago',
    },
    {
      id: 3,
      name: 'Kirill Konstantinov',
      messages: [
        { message: 'Help me!!!', isMyMessage: 'message-other' },
        { message: 'PLEASE!', isMyMessage: 'message-other' },
      ],
      lastOnline: 'a two days ago',
    },
  ]);
  return (
    <div className="app-wrapper">
      <HeaderNav />
      <Dialogs users={users} setSelectedDialog={setSelectedDialog} />
      <div className="app-wrapper-content">
        {selectedDialog !== -1 && <ChatField user={users[selectedDialog]} />}
        {selectedDialog === -1 && (
          <div className={'block-no-users'}>
            <Text value={'Select a chat to start messaging'} size={'15'} />
          </div>
        )}
      </div>
    </div>
  );
};
