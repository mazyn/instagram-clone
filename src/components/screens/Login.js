import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Login extends Component {

  login() {
    // TODO: Nativate to Main App
    this.props.navigation.navigate('Tabs');
  }

  render() {
    return (
      <TouchableOpacity
      style={{
        width: '100%',
          height: '100%',
          
            justifyContent: 'center',
            alignItems: 'center'
      }}
        onPress={() => this.login()}
      >
        <Text>Login Page</Text>
      </TouchableOpacity>
    );
  }
}

export default Login;