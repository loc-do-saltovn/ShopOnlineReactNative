import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image,TextInput,Dimensions,} from 'react-native';

import icLogo from '../../../media/appIcon/logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png'
const {height} = Dimensions.get('window')

export default class Header extends Component<Props>{
    render() {
        return (
            <View style = {{height: height / 8, backgroundColor: '#34B089', padding: 10, justifyContent:'space-around'}}>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity>
                        <Image source={icMenu} style={styles.iconStyle}/>
                    </TouchableOpacity>
                    {/* <Text style={styles.titleStyle}>GearShop</Text> */}
                    <Image source={icLogo} style={styles.iconStyle1}/>
                </View>
                <TextInput
                    style= {styles.textInputStyle}
                    placeholder='What do you want to buy?'
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
    iconStyle: {
        height: 25,
        width: 25,
    },
    iconStyle1: {
        height: 45,
        width: 220,
        marginLeft: 40
  
    },
    
    titleStyle: {
        color: '#FFF',
        fontSize: 20,
    },
    textInputStyle: {
        height: height /18, 
        backgroundColor: '#FFF',
        paddingLeft: 10,
    }
  });
