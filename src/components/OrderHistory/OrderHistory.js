import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import ElevatedView from 'react-native-elevated-view'

import backIcon from '../../media/appIcon/backs.png'

export default class OrderHistory extends Component {
  render() {
    const {wrapper, header, body, title, iconStyle, totalOrder, Column} = styles;
    return (
      <View style={wrapper}>
        <View style={header}>
          <View/>
          <Text style={title}>Order History</Text>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <Image source={backIcon} style={iconStyle}/>
          </TouchableOpacity>
        </View>
        <View style={body}>
          <ScrollView>
            <ElevatedView elevation={3} style={totalOrder}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                <Text style={{ color: '#4895F0' }}>ORD001</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
              </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                <Text style={{ color: '#4895F0' }}>Pending</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
              </View>
            </ElevatedView>
            <ElevatedView elevation={3} style={totalOrder}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                <Text style={{ color: '#4895F0' }}>ORD001</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
              </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                <Text style={{ color: '#4895F0' }}>Pending</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
              </View>
            </ElevatedView>
            <ElevatedView elevation={3} style={totalOrder}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                <Text style={{ color: '#4895F0' }}>ORD001</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
              </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                <Text style={{ color: '#4895F0' }}>Pending</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
              </View>
            </ElevatedView>
            <ElevatedView elevation={3} style={totalOrder}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                <Text style={{ color: '#4895F0' }}>ORD001</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
              </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                <Text style={{ color: '#4895F0' }}>Pending</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
              </View>
            </ElevatedView> 
            <ElevatedView elevation={3} style={totalOrder}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                <Text style={{ color: '#4895F0' }}>ORD001</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
              </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                <Text style={{ color: '#4895F0' }}>Pending</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
              </View>
            </ElevatedView>
          </ScrollView>
        </View> 
      </View>
    );
  }
}

const{width} = Dimensions.get('window')

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    flex: 1,
    backgroundColor: '#4895F0',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 18,
  },
  iconStyle: {
    height: 40,
    width: 40,
  },
  body: {
    flex: 10,
    backgroundColor: '#F6F6F6'
  },
  totalOrder: {
    height: width / 3,
    backgroundColor: '#FFF',
    margin: 10,   
    padding: 10,
    borderRadius: 2,
    justifyContent: 'space-around'
  },
  

});
