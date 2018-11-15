import React, { Component } from 'react';


import CartView from './CartView'
import ProductDetail from '../ProductDetail/ProductDetail'

import {createStackNavigator} from 'react-navigation'

const HomeStackNavigator = createStackNavigator({
   CartView: {screen: CartView},
   ProductDetail:{ screen: ProductDetail },
}, {
    headerMode: 'none',
    initialRouteName: 'CartView',
})
export default class Cart extends Component{
    render() {
        return (
            <HomeStackNavigator  />
        );
    }
}


