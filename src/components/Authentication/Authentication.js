import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

type Props = {};
export default class Authentication extends Component<Props> {
  render() {
    const {navigate} = this.props.navigation;   
    return (
      <View style={styles.container}>
        <Text>Authentication Component </Text>
        <Button 
            title = 'Go back to Main' 
            onPress={()=>navigate('Main')}
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
