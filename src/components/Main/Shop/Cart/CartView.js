import React, { Component } from 'react';


import Cart from './Cart'
import ProductDetail from '../ProductDetail/ProductDetail'

import {createStackNavigator} from 'react-navigation'

const HomeStackNavigator = createStackNavigator({
   Cart: {screen: Cart},
   ProductDetail:{ screen: ProductDetail },
}, {
    headerMode: 'none',
    initialRouteName: 'Cart',
})
export default class CartView extends Component{
    render() {
        return (
            <HomeStackNavigator  />
        );
    }
}

