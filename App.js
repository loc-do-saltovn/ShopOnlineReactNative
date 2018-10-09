import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Authentication from './src/components/Authentication/Authentication'
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo'
import Main from './src/components/Main/Main'
import OrderHistory from './src/components/OrderHistory/OrderHistory'

import {createStackNavigator} from 'react-navigation'

const AppStackNavigator = createStackNavigator({
  Authentication: {screen: Authentication},
  ChangeInfo: {screen: ChangeInfo},
  Main: {screen: Main},
  OrderHistory: {screen: OrderHistory},
}, {
  // cấu hình mặc định cho tất cả các màn hình 
  headerMode: 'none',
  initialRouteName: 'Main'
}
)

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppStackNavigator ref={nav => {this.navigator = nav;}} /> // default page đầu tiên là page Main
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


