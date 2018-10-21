import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';

import Popular from './Popular'
import Category from './Category'
import TopProduct from './TopProduct'
export default class Home extends Component<Props>{
    render() {
        return (
            <ScrollView >
                {/* <Popular/>
                <Category/> */}
                <TopProduct/>
            </ScrollView>
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
