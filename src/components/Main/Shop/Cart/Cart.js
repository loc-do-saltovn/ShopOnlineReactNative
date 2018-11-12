import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Cart extends Component{
render() {
    return (
        <View style = {styles.container} >
            <Text>Component Cart</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDetail')}> 
                <Text>Go to Product Detail</Text>
            </TouchableOpacity>
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
