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

import { createDrawerNavigator } from 'react-navigation'

type Props = {};
export default class Main extends Component<Props> {
  closeControlPanel = () => {
    this.drawer.close();
  };
  openControlPanel = () => {
    this.drawer.open();
  };
  render() {
    const{navigator} = this.props;
    return ( 
      
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Menu  navigation={this.props.navigation}/>}
        openDrawerOffset={0.4}
        tapToClose
      >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}


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
