import React, { Component } from 'react';
import {ScrollView,} from 'react-native';

import Popular from './Popular'
import Category from './Category'
import TopProduct from './TopProduct'
export default class HomeView extends Component<Props>{
    render() {
        return (
            <ScrollView >
                <Popular/>
                <Category navigation={this.props.navigation}/>
                <TopProduct/>
            </ScrollView>
        );
    }
}

