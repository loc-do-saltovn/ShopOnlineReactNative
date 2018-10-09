import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

type Props = {};
export default class Main extends Component<Props> {
  render() {
    const {navigate} = this.props.navigation; // sử dụng navigation để liên kết với màn hình khác thông qua title của màn 
    

    return (
      <View>
        <Text>Main Component</Text>
        <Button 
            title = 'Go To Authentication' 
            onPress={()=>navigate('Authentication')}
        />
        
        <Button 
            title = 'Go To ChangeInfo' 
            onPress={()=>navigate('ChangeInfo')}
        />

        <Button 
            title = 'Go To OrderHistory' 
            onPress={()=>navigate('OrderHistory')}
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
