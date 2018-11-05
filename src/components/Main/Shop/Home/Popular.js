import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

import bannerImage from '../../../../media/temp/banner.jpg'

import ElevatedView from 'react-native-elevated-view'


export default class Popular extends Component {
    render() {
        return (
            <View margin={10} >
                <ElevatedView elevation={3} style={styles.stayElavated} >
                    <View style = {styles.wrapper}>
                            <View style={{flex: 1 ,justifyContent: 'center'}}>
                                <Text style={styles.textStyle}>POPULAR PRODUCT</Text>
                            </View>
                            <View style={{flex: 4}}>
                                <Image source ={bannerImage} style={styles.imageStyle}/>
                            </View>
                    </View>
                </ElevatedView>
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
    stayElavated: {
        
        backgroundColor: '#FFF',
       

    },
    
});
