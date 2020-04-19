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
    backgroundColor: styleConstants.inputBgColor,
    borderColor: styleConstants.inputBorderColor,
    borderRadius: 4,
    marginTop: 20,
    paddingLeft: 16,
    minWidth: '100%',
    height: styleConstants.rowHeight,
  },
  button: {
    minWidth: '100%',
    height: styleConstants.rowHeight,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: styleConstants.primaryButtonColor,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  helpSigningIn: {
    marginTop: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footer: {
    flexDirection: 'row',
    height: styleConstants.rowHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderColor: styleConstants.inputBorderColor,
    backgroundColor: styleConstants.inputBgColor
  }
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
        <Image
          source={images.wordMark}
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
            onPress={this.login()}
          >
            <Text style={styles.buttonText}>{"Log In "}</Text>
          </TouchableOpacity>
          <View style={styles.helpSigningIn}>
            <Text style={{ color: styleConstants.textDarkGrayColor }}>Forgot your login details?</Text>
            <TouchableOpacity style={{ marginLeft: 5 }}>
              <Text style={{ color: styleConstants.primaryLinkColor, fontWeight: 'bold' }}>Get help signing in.</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                borderBottomColor: styleConstants.inputBorderColor,
                borderBottomWidth: 1,
                height: 1,
                flex: 1
              }}
            />
            <View style={{ marginHorizontal: 12 }}>
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
              <View
                style={{
                  width: 16,
                  height: 16,
                  marginRight: 10,
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
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
        {/* <View style={{ flex: 1 }} /> */}
        <View style={styles.footer}>
          <Text style={{ color: styleConstants.textDarkGrayColor }}>Don't have an account?</Text>
          <TouchableOpacity style={{ marginLeft: 5 }}>
            <Text style={{ color: styleConstants.primaryLinkColor, fontWeight: 'bold' }}>{"Sign up. "}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;