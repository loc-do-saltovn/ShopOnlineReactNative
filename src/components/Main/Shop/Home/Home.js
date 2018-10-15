import React, { Component } from 'react';
import { View, Text, StyleSheet,} from 'react-native';

import {Icon,Button,Container,Header,Content,Left,} from 'native-base'
export default class Home extends Component<Props>{
    render() {
        return (
            <View style = {styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
