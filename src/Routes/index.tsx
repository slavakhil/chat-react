import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Auth } from '../components/pages/Auth';
import { Chat } from '../components/pages/Chat';
import { SCREENS } from './endpoints';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SCREENS.SCREEN_AUTH} exact>
        <Auth />
      </Route>
      <Route path={SCREENS.SCREEN_CHAT} exact>
        <Chat />
      </Route>
      <Redirect from={'/'} to={SCREENS.SCREEN_AUTH} />
    </Switch>
  );
};
