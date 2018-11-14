import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import Profile from '../../media/temp/profile.png'
export default class Menu extends Component<Props>{
    constructor(props) {
        super(props)
        this.state = {isLogedIn: true};
    }
    render() {
        const { container, imageStyle, btnSignInStyle, textSignInStyle,loginStyle,textUserNameStyle } = styles;
        const logOutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={btnSignInStyle} onPress={()=> this.props.navigation.navigate('Authentication')} >
                    <Text style={textSignInStyle}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const loginJSX = (
            <View style={loginStyle}>
                <Text style={textUserNameStyle}>Do Thanh Loc</Text>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={btnSignInStyle} onPress={() => this.props.navigation.navigate('OrderHistory')}   >
                        <Text style={textSignInStyle}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={()=> this.props.navigation.navigate('ChangeInfo')}>
                        <Text style={textSignInStyle}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle}>
                        <Text style={textSignInStyle}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
        const checkLoginOrLogout = this.state.isLogedIn ? loginJSX: logOutJSX;
        return (
            <View style={container}>
                <ImageBackground source={Profile} style={imageStyle} />
                {checkLoginOrLogout}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4895F0',
        borderRightWidth: 3,
        borderColor: '#FFF',
        alignItems: 'center'
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
    imageStyle: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    btnSignInStyle: {
        height: 50,
        width: 200,
        borderRadius: 10,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,

    },
    textSignInStyle: {
        color: '#4895F0',
        fontSize: 15
    },
    loginStyle: {
        flex: 1, 
        alignItems: 'center' 
    },
    textUserNameStyle: {
        paddingBottom: 10, 
        color: '#FFF'
    }
});
