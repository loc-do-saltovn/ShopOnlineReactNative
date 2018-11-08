import React, { Component } from 'react';

import Drawer from 'react-native-drawer'
import Menu from './Menu'
import Shop from './Shop/Shop.js'

type Props = {};
export default class Main extends Component<Props> {
  closeControlPanel = () => {
    this.drawer.close();
  };
  openControlPanel = () => {
    this.drawer.open();
  };
  render() {
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

