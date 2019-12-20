import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainFeed, Login, Camera, Profile } from './components/screens';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const Tabs = createBottomTabNavigator({
  Feed: MainFeed,
  Camera,
  Profile
});

const MainStack = createSwitchNavigator({
  Login,
  Tabs
});

const InstaClone = createAppContainer(MainStack);

export default InstaClone;