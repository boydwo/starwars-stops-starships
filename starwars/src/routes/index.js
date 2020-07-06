import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Form from '../pages/Form';
import Result from '../pages/Result';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={(props) => <Form {...props} />} />
      <Route
        path="/result"
        component={(props) => <Result {...props} />}
        isPrivate
      />
    </Switch>
  );
}
