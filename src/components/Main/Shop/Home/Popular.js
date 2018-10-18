import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

import bannerImage from '../../../../media/temp/banner.jpg'

export default class Popular extends Component {
    render() {
        return (
            <View style = {styles.wrapper}>
                <View style={{flex: 1 ,justifyContent: 'center'}}>
                    <Text style={styles.textStyle}>POPULAR PRODUCT</Text>
                </View>
                <View style={{flex: 4,}}>
                    <Image source ={bannerImage} style={styles.imageStyle}/>
                   
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
    },
});
