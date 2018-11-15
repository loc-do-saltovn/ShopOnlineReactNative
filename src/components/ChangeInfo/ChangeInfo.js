import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput} from "react-native";

import backIcon from '../../media/appIcon/backs.png';
export default class ChangeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        txtName: 'Do Thanh Loc', 
        txtAddress: 'UIT / Thu Duc', 
        txtPhone: '0769423567' 
    };
  }
  render() {
    const {
      wrapper, header, headerTitle, backIconStyle, body,
      signInContainer, signInTextStyle, textInput
    } = styles;
    const { name, address, phone } = this.state;
    return (
      <View style={wrapper}>
        <View style={header}>
          <View />
          <Text style={headerTitle}>User Infomation</Text>
          <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
            <Image source={backIcon} style={backIconStyle} />
          </TouchableOpacity>
        </View>
        <View style={body}>
          <TextInput
            style={textInput}
            placeholder="Enter your name"
            autoCapitalize="none"
            value={name}
            onChangeText={(txtName) => this.setState({ name: txtName })}
          />
          <TextInput
            style={textInput}
            placeholder="Enter your address"
            autoCapitalize="none"
            value={address}
            onChangeText={txtAddress =>this.setState({ ...this.state, txtAddress })}
          />
          <TextInput
            style={textInput}
            placeholder="Enter your phone number"
            autoCapitalize="none"
            value={phone}
            onChangeText={txtPhone =>this.setState({ ...this.state, txtPhone })}
          />
          <TouchableOpacity style={signInContainer}>
            <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  header: { 
    flex: 1,
    backgroundColor: '#4895F0', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    paddingHorizontal: 10 },// eslint-disable-line
  headerTitle: { 
    fontFamily: 'Avenir',
    color: '#fff',
    fontSize: 20 
  },
  backIconStyle: { 
    width: 30, 
    height: 30 
  },
  body: {
    flex: 10, 
    backgroundColor: '#F6F6F6', 
    justifyContent: 'center' },
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Avenir',
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: '#4895F0',
    borderWidth: 1
  },
  signInTextStyle: {
    color: '#FFF', 
    fontFamily: 'Avenir', 
    fontWeight: '600', 
    paddingHorizontal: 20
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: '#4895F0',
    borderRadius: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
    },
  signInStyle: {
    flex: 3,
    marginTop: 50
  }
});
