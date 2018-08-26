import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ApolloClient from 'apollo-boost';
import { REGISTER_MUTATION } from './graphql/mutations';
import { toastr } from 'react-redux-toastr';

import Login from './Login';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleClick(event) {
    const payload = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    const client = new ApolloClient({
      uri: 'http://localhost:4000/graphql',
    });
    
    client.mutate({
      mutation: REGISTER_MUTATION,
      variables: payload
    }).then(result => {
      console.log('register result: ', result.data);
      toastr.success('Register Success');
    }).catch(error => {
      toastr.error('Register Failure');
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Register" />
            <TextField
              hintText="Enter your Full Name"
              floatingLabelText="Full Name"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Register"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;
