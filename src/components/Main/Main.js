import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Drawer from 'react-native-drawer'

import Menu from './Menu'
import Shop from './Shop/Shop.js'
import Search from './Shop/Search/Search'
import Authentication from '../Authentication/Authentication'
import ChangeInfo from '../ChangeInfo/ChangeInfo/'
import OrderHistory from '../OrderHistory/OrderHistory'

import {createDrawerNavigator} from 'react-navigation'

type Props = {};
export default class Main extends Component<Props> {
  
  
  render() {
    return (
      <MyApp></MyApp>
    );
  }
}
const MyApp = createDrawerNavigator({
  Shop: Shop,
  Authentication: Authentication,
  ChangeInfo: ChangeInfo,  
  OrderHistory: OrderHistory,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFF5C9',
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
