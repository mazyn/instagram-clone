import React from 'react';
import { Image } from 'react-native';
import { MainFeed, Login, Camera, Profile, Explore, Activity, Direct } from './components/screens';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createAppContainer } from 'react-navigation';
import { Transition } from 'react-native-reanimated';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack';
import config from './config';

const { icons } = config;

const Tabs = createBottomTabNavigator({
  Feed: {
    screen: MainFeed,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <Image
        source={focused ? icons.home : icons.homeOutline}
        fadeDuration={0}
        style={{ width: 24, height: 24 }}
      />
    }
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <Image
        source={focused ? icons.searchHeavy : icons.searchLight}
        fadeDuration={0}
        style={{ width: 24, height: 24 }}
      />
    }
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      tabBarIcon: <Image
        source={icons.plusSquared}
        fadeDuration={0}
        style={{ width: 24, height: 24 }}
      />
    }
  },
  Activity: {
    screen: Activity,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <Image
        source={focused ? icons.heart : icons.heartOutline}
        fadeDuration={0}
        style={{ width: 24, height: 24 }}
      />
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <Image
        source={focused ? icons.user : icons.userOutline}
        fadeDuration={0}
        style={{ width: 24, height: 24 }}
      />
    }
  }
}, {
  tabBarOptions: {
    showLabel: false,
  }
});

const Stack = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      headerShown: false
    }
  },
  Direct,
}, {
  defaultNavigationOptions: {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  }
});

const RootStack = createAnimatedSwitchNavigator({
  Login,
  Stack
});

const InstaClone = createAppContainer(RootStack);

export default InstaClone;