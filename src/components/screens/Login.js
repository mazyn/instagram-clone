import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ImageBackground } from 'react-native';
import config from '../../config';

const { images, styleConstants } = config;

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: styleConstants.inputBorderColor,
    borderRadius: 6,
    marginTop: 25,
    backgroundColor: styleConstants.inputBgColor,
    paddingLeft: 16,
    minWidth: '100%',
    height: 58,
  },
  button: {
    minWidth: '100%',
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: styleConstants.primaryButtonColor,
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  helpSigningIn: {
    marginTop: 30,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  },
});

class Login extends Component {

  login() {
    // TODO: Nativate to Main App
    this.props.navigation.navigate('Tabs');
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image source={images.wordMark}
          style={{
            height: 80,
            width: '50%'
          }}
          resizeMode="contain"
        />
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Phone number, username or email"
            placeholderTextColor={styleConstants.textGrayColor}
            autoCompleteType="username"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={styleConstants.textGrayColor}
            autoCompleteType="password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>{"Log In "}</Text>
          </TouchableOpacity>
          <View style={styles.helpSigningIn}>
            <Text style={{ color: styleConstants.textDarkGrayColor }}>Forgot your login details?</Text>
            <TouchableOpacity style={{ marginLeft: 5 }}>
              <Text style={{ color: styleConstants.primaryLinkColor, fontWeight: 'bold' }}>Get help signing in.</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 35, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                borderBottomColor: styleConstants.inputBorderColor,
                borderBottomWidth: 1,
                height: 1,
                flex: 1
              }}
            />
            <View style={{
              marginHorizontal: 12
            }}>
              <Text style={{ color: styleConstants.textDarkGrayColor, fontWeight: 'bold', fontSize: 16 }}>{"OR "}</Text>
            </View>
            <View
              style={{
                borderBottomColor: styleConstants.inputBorderColor,
                borderBottomWidth: 1,
                height: 1,
                flex: 1
              }}
            />
          </View>
          <View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: styleConstants.rowHeight }}>
              <View style={{
                width: 16,
                height: 16,
                marginRight: 10,
                overflow: 'hidden',
                borderRadius: 3,
              }}>
                <Image
                  source={images.sprite}
                  resizeMode="cover"
                  style={styleConstants.coreSpriteFacebookIcon}
                />
              </View>
              <Text style={{ color: styleConstants.facebookBlueColor, fontWeight: 'bold' }}>
                {"Log in with Facebook  "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;