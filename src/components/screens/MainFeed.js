import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import { PostFeed } from '../container';
import config from '../../config';

const { icons, images, styleConstants } = config;

class MainFeed extends Component {

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.topBar}>
          <TouchableWithoutFeedback>
            <View style={{ paddingLeft: 12, paddingRight: 10 }}>
              <Image source={icons.camera} style={{ width: 24, height: 24 }} />
            </View>
          </TouchableWithoutFeedback>
          <Image source={images.wordMark} style={{ width: 90, height: 32, top: 3 }} />
          <View style={{ flexGrow: 1 }} />
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Direct')}>
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
            {/* <View style={{ marginRight: 14 }}>
              <Image source={icons.paperPlane} style={{ width: 20, height: 20 }} />
            </View> */}
          </TouchableWithoutFeedback>
        </View>
        <PostFeed />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    height: 50,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'rgb(250, 250, 250)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(233, 233, 233)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 4
  }
});

export default MainFeed;