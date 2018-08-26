import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ApolloClient from 'apollo-boost';
import { LOGIN_MUTATION } from './graphql/mutations';
import { toastr } from 'react-redux-toastr';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleClick(event) {
    const payload = {
      email: this.state.username,
      password: this.state.password,
    };
    const client = new ApolloClient({
      uri: 'http://localhost:4000/graphql',
    });
    
    client.mutate({
      mutation: LOGIN_MUTATION,
      variables: payload
    }).then(result => {
      console.log('login result: ', result.data);
      toastr.success('Login Success');
    }).catch(error => {
      toastr.error('Login Failure');
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"

              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
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
              label="Login"
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
export default Login;
