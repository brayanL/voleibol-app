/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainScreen from './src/apps/main/screens/MainScreen';
import store from './src/redux/store';
import MatchScreen from './src/apps/match/screens/MatchScreen';

type Props = {};
const AppStackNavigatorMain = createStackNavigator({
  MainScreen: { screen: MainScreen },
  MatchScreen: { screen: MatchScreen }
});

// Its necessary since React Navigation 3 version.
const AppMain = createAppContainer(AppStackNavigatorMain);

export default class App extends Component<Props> {
  render() {
    return (
        <Root>
          <Provider store={store}>
            <AppMain />
          </Provider>
        </Root>
    );
  }
}
