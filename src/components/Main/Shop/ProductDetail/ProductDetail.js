import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

type Props = {};
export default class ProductDetail extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>ProductDetail Component </Text>
        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
          <Text>Go back TopProduct</Text>
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
    backgroundColor: '#5B4287',
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
