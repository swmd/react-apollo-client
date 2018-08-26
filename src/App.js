import React, { Fragment } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Route, Switch } from "react-router-dom";
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './App.css';
import LoginScreen from './LoginScreen';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const App = () => (
  <Fragment>
    <Switch>
      <Route path="/" name="Login Screen" component={LoginScreen} />
    </Switch>
    <ReduxToastr
      timeOut={3000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="bounceIn"
      transitionOut="bounceOut"
      progressBar
    />
  </Fragment>
);

export default App;
