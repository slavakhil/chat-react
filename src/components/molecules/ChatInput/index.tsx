import React from 'react';
import { InputField } from '../../atoms/InputField';
import attachmentButton from '../../../assets/attachmentButton.svg';
import sendMsgButton from '../../../assets/sendMsgButton.svg';
import './styles.scss';

export const ChatInput: React.FC = () => {
  const handleChange = () => {
    //
  };
  return (
    <div id={'chat-form'} className={'chat-input'}>
      <button>
        <img src={attachmentButton} />
      </button>
      <InputField
        placeholder={'Write something...'}
        type={'text'}
        id={'message'}
        flag={false}
        value={''}
        handleChange={handleChange}
      />
      <button>
        <img src={sendMsgButton} />
      </button>
    </div>
  );
};
