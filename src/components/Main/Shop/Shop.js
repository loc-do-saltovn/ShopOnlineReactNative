import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import TabNavigator from 'react-native-tab-navigator'

import Home from './Home/Home'
import Contact from './Contact/Contact'
import Search from './Search/Search'
import Header from './Header'
import CartView from './Cart/CartView'

import homeIcon from '../../../media/appIcon/home0.png'
import homeIconSelected from '../../../media/appIcon/home.png'
import cartIcon from '../../../media/appIcon/cart0.png'
import cartIconSelected from '../../../media/appIcon/cart.png'
import contactIcon from '../../../media/appIcon/contact0.png'
import contactIconSelected from '../../../media/appIcon/contact.png'
import searchIcon from '../../../media/appIcon/search0.png'
import searchIconSelected from '../../../media/appIcon/search.png'

export default class Shop extends Component{
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
            <View style={{ flex: 1 }}>
                <Header onOpenMenu={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={homeIcon} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={homeIconSelected} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: '#4895F0' }}
                    >
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        renderIcon={() => <Image source={contactIcon} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={contactIconSelected} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: '#4895F0' }}

                    >
                        <Contact />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        renderIcon={() => <Image source={searchIcon} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={searchIconSelected} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: '#4895F0' }}
                    >
                        <Search />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        renderIcon={() => <Image source={cartIcon} style={styles.iconStyle} />}
                        renderSelectedIcon={() => <Image source={cartIconSelected} style={styles.iconStyle} />}
                        selectedTitleStyle={{ color: '#4895F0' }}
                    >
                        <CartView />
                    </TabNavigator.Item>

                </TabNavigator>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        height: 20,
        width: 20,
    }
});
