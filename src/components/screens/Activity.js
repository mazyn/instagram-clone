import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Activity extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>Activity Page!</Text>
      </View>
    );
  }
}

export default Activity;