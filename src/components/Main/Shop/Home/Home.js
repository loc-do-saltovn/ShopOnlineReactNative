import React, { Component } from 'react';

import HomeView from './HomeView'
import ListProduct from '../ListProduct/ListProduct'
import ProductDetail from '../ProductDetail/ProductDetail'
import Category from './Category'
import Cart from '../Cart/Cart'

import {createStackNavigator} from 'react-navigation'

const HomeStackNavigator = createStackNavigator({
    HomeView: {screen: HomeView},
    ListProduct: {screen: ListProduct},
    ProductDetail: {screen: ProductDetail},
    Category: {screen: Category},
    ProductDetail: {screen: ProductDetail},

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

