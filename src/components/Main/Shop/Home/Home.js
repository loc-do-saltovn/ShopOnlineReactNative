import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity} from 'react-native';

import HomeView from './HomeView'
import ListProduct from '../ListProduct/ListProduct'
import ProductDetail from '../ProductDetail/ProductDetail'
import Category from './Category'
import {createStackNavigator} from 'react-navigation'

const HomeStackNavigator = createStackNavigator({
    HomeView: {screen: HomeView},
    ListProduct: {screen: ListProduct},
    ProductDetail: {screen: ProductDetail},
    Category: {screen: Category},

}, {
    headerMode: 'none',
    initialRouteName: 'HomeView',
})
export default class Home extends Component<Props>{
    render() {
        return (
            <HomeStackNavigator/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#808080',
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
