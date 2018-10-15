import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

type Props = {};
export default class OrderHistory extends Component<Props> {
  render() {
    const {navigate} = this.props.navigation;  
    return (
      <View style={styles.container}>
        <Text>OrderHistory Component </Text>
        <Button 
            onPress={() => this.props.navigation.goBack()}
            title="Go back Main"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D86FF',
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
