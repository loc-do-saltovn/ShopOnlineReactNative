import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


import productOne from '../../../../media/temp/sp1.jpeg'
import productTwo from '../../../../media/temp/sp2.jpeg'
import productThree from '../../../../media/temp/sp3.jpeg'
import productFour from '../../../../media/temp/sp4.jpeg'

import ElevatedView from 'react-native-elevated-view'

const { height, width } = Dimensions.get('window')

export default class TopProduct extends Component {
    render() {
        const { Container, productContainer, productTitle, bodyImage, productImage, productPrice, productName } = styles;
        return (
            <View style={Container} >
                <View style={productTitle}>
                    <Text>TOP PRODUCT</Text>
                </View>
                <View style={bodyImage}>
                    <TouchableOpacity style={productContainer} onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                        <ElevatedView elevation={3} style={styles.stayElevated}>
                            <ImageBackground source={productOne} style={productImage} />
                            <Text style={productName}>Product Name</Text>
                            <Text style={productPrice}>300$</Text>
                        </ElevatedView>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                        <ElevatedView elevation={3} style={styles.stayElevated}>
                            <ImageBackground source={productTwo} style={productImage} />
                            <Text style={productName}>Product Name</Text>
                            <Text style={productPrice}>300$</Text>
                        </ElevatedView>
                    </TouchableOpacity>
                    <View style={{ height: 10, width }} />
                    <TouchableOpacity style={productContainer} onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                        <ElevatedView elevation={3} style={styles.stayElevated}>
                            <ImageBackground source={productThree} style={productImage} />
                            <Text style={productName}>Product Name</Text>
                            <Text style={productPrice}>300$</Text>
                        </ElevatedView>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                        <ElevatedView elevation={3} style={styles.stayElevated}>
                            <ImageBackground source={productFour} style={productImage} />
                            <Text style={productName}>Product Name</Text>
                            <Text style={productPrice}>300$</Text>
                        </ElevatedView>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const imageWidth = (width - 50) / 2;
const imageHeight = (imageWidth / 361) * 452;

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#FFF',
        margin: 10,
        padding: 5,
        elevation: 3,

    },
    productTitle: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    bodyImage: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
        flexWrap: 'wrap'

    },
    productContainer: {
        width: imageWidth,
    },
    productImage: {
        height: imageHeight,
        width: imageWidth,

    },
    productName: {
        paddingLeft: 10,
        color: '#D3D3CF',
        fontWeight: '500',
    },
    productPrice: {
        paddingLeft: 10,
        color: '#662F90',
        fontWeight: '500',
    },
    stayElevated: {
        backgroundColor: '#FFF',
       
    }
});
