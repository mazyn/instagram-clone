import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Explore extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>Explore Page!</Text>
      </View>
    );
  }
}

export default Explore;