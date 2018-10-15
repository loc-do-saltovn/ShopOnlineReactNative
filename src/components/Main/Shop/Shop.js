import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,TouchableOpacity,  } from 'react-native';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import TabNavigator from 'react-native-tab-navigator'

import Home from './Home/Home'
import Contact from './Contact/Contact'
import Search from './Search/Search'
import Cart from './Cart/Cart'
import Header from './Header'

const {height} = Dimensions.get('window')

export default class Shop extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'home'
        };
    }
    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {  
        return (
                /* /* <Header style= {{backgroundColor: '#34B089', height: 70, borderBottomColor: '#00ffff', }}>
                    <Left style={{flexDirection: 'row'}}>
                        <Button transparent >
                            <Icon name= 'md-menu' style= {{color: 'white', marginLeft:15}}/>
                        </Button>
                        
                    </Left> 
                    <Right>
                        <Icon name='md-cart' style= {{color: 'white'}}/>
                    </Right>
        </Header> */
                
                <View style={{flex: 1}}>
                    <Header/>
                    <TabNavigator>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'home'}
                            title="Home"
                            onPress={() => this.setState({ selectedTab: 'home' })}
                        >
                            <Home/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'contact'}
                            title="Contact"
                            onPress={() => this.setState({ selectedTab: 'contact' })}
                        >
                            <Contact/>
                        </TabNavigator.Item>

                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'search'}
                            title="Search"
                            onPress={() => this.setState({ selectedTab: 'search' })}
                        >
                            <Search/>
                        </TabNavigator.Item>

                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'cart'}
                            title="Cart"
                            onPress={() => this.setState({ selectedTab: 'Cart' })}
                        >
                            <Cart/>
                        </TabNavigator.Item>

                    </TabNavigator>
                </View>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
