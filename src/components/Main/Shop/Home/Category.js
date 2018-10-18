import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground} from 'react-native';

const {width, height} = Dimensions.get('window');

import maxiIcon from '../../../../media/temp/maxi.jpg'
import littleIcon from '../../../../media/temp/little.jpg'
import partyIcon from '../../../../media/temp/party.jpg'

import Swiper from 'react-native-swiper'
export default class Category extends Component {
    render() {
        return (
            <View style = {styles.wrapper}>
                <View style={{flex: 1 ,justifyContent: 'center'}}>
                    <Text style={styles.textStyle}>POPULAR PRODUCT</Text>
                </View>
                <View style={{flex: 4,}}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight}>
                        <ImageBackground source ={maxiIcon} style={styles.imageStyle}>
                            <Text style={styles.cateTitle}>Maxi Dress</Text>
                        </ImageBackground>
                        <ImageBackground source ={littleIcon} style={styles.imageStyle}>
                            <Text style={styles.cateTitle}>Maxi Dress</Text>
                        </ImageBackground>
                        <ImageBackground source ={partyIcon} style={styles.imageStyle}>
                            <Text style={styles.cateTitle}>Maxi Dress</Text>
                        </ImageBackground>
                    </Swiper>
                   
                </View>
                
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
 
const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.32,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
    },
    textStyle: {
        fontSize: 18,
        color: '#AFAEAF',
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        paddingBottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle:{
        fontSize: 15,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
});
