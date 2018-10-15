import React, { Component } from 'react';
import { View, Text, StyleSheet,} from 'react-native';

export default class Search extends Component<Props>{
render() {
    return (
        <View style = {styles.container} >
            <Text>Component Search</Text>
        </View>
    );
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00008b',
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
