import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";

import iconBack from "../../media/appIcon/back_white.png";

type Props = {};
export default class Authentication extends Component<Props> {
  constructor(props){
    super(props)
    this.state={isSignIn: true}
  }
  signIn(){
    this.setState({isSignIn: true});
  }
  signUp() {
    this.setState({isSignIn: false});
  }
  render() {
    const { navigate } = this.props.navigation;
    const signInJSX = (
      <View>
        <TextInput style={styles.inputStyle} underlineColorAndroid='transparent' placeholder="Enter Your Mail" />
        <TextInput style={styles.inputStyle} underlineColorAndroid='transparent' placeholder="Enter Your Password"/>
        <TouchableOpacity style={styles.signInNowStyle}>
          <Text style={styles.textStyle}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    );
    const signUpJXS=(
      <View>
          <TextInput style={styles.inputStyle} underlineColorAndroid='transparent' placeholder="Enter Your Name" />
          <TextInput style={styles.inputStyle} underlineColorAndroid='transparent' placeholder="Enter Your Email" />
          <TextInput style={styles.inputStyle} underlineColorAndroid='transparent' placeholder="Enter Your Password" />
          <TextInput style={styles.inputStyle} underlineColorAndroid='transparent' placeholder="Re-Enter Your Password" />
          <TouchableOpacity style={styles.signInNowStyle}>
            <Text style={styles.textStyle}>SIGN UP NOW</Text>
          </TouchableOpacity>
        </View>
    );
    const{isSignIn} = this.state // lấy ra biến isSignIn
    const checkSignInOrSignUp =isSignIn ? signInJSX : signUpJXS; // check xem đang ở trường hợp nào.
    return (
      <View style={(style = styles.container)}>
        <View style={styles.wrapper1}>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
            <Image source={iconBack} style={styles.iconStyle} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>hehehhe</Text>
        </View>
        {checkSignInOrSignUp}
        <View style={styles.wrapper2}>
          <TouchableOpacity style={styles.signInStyle} onPress={this.signIn.bind(this)}> 
            <Text style={isSignIn ? styles.activedStyle: styles.notActivedStyle}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signOutStyle} onPress={this.signUp.bind(this)}>
            <Text style={!isSignIn ? styles.activedStyle: styles.notActivedStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4895F0",
    padding: 20,
    justifyContent: "space-between"
  },
  iconStyle: {
    height: 25,
    width: 25
  },
  titleStyle: {
    color: "#FFF",
    fontSize: 20,
    justifyContent: "center",
    paddingLeft: 100
  },
  wrapper1: {
    flexDirection: "row",
    alignSelf: 'stretch'
  },
  wrapper2: {
    flexDirection: "row"
  },
  signInStyle: {
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingVertical: 15,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1
  },
  signOutStyle: {
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingVertical: 15,
    flex: 1,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 1
  },
  notActivedStyle: {
    color: "#D7D7D7"
  },
  activedStyle: {
    color: "#4895F0"
  },
  inputStyle: {
    backgroundColor: "#FFF",
    height: 50,
    borderRadius: 15,
    marginBottom: 10,
    paddingLeft: 30
  },
  signInNowStyle: {
    height: 50,
    borderRadius: 15,
    borderColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2
  },
  textStyle: {
    color: "#FFF",
    fontWeight: "400"
  }
});
