import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView,Dimensions, StyleSheet, Image} from 'react-native';

import sp5 from '../../../../media/temp/sp5.jpeg'

import Elevated from 'react-native-elevated-view'

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default class CartView extends Component{
render() {
    const { container,wrapper, productContainer , productImage, productInfo, checkoutButton, checkoutTitle,
            productController,
            txtName, txtPrice, numberOfProduct, 
            txtShowDetail, showDetailContainer } = styles;
    return (
        <View style={container}>
            <ScrollView style={wrapper}>
                <Elevated elevation={3} style={productContainer}>
                    <Image source={sp5} style={productImage} />
                    <View style={productInfo}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={txtName}>{toTitleCase('black of the')}</Text>
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={txtPrice}>{100}$</Text>
                        </View>
                        <View style={productController}>
                            <View style={numberOfProduct}>
                                <TouchableOpacity>
                                    <Text>+</Text>
                                </TouchableOpacity>
                                <Text>{3}</Text>
                                <TouchableOpacity>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={showDetailContainer} onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                                <Text style={txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Elevated>
                <Elevated elevation={3} style={productContainer}>
                    <Image source={sp5} style={productImage} />
                    <View style={productInfo}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={txtName}>{toTitleCase('black of the')}</Text>
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={txtPrice}>{100}$</Text>
                        </View>
                        <View style={productController}>
                            <View style={numberOfProduct}>
                                <TouchableOpacity>
                                    <Text>+</Text>
                                </TouchableOpacity>
                                <Text>{3}</Text>
                                <TouchableOpacity>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={showDetailContainer} onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                                <Text style={txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Elevated>
                <Elevated elevation={3} style={productContainer}>
                    <Image source={sp5} style={productImage} />
                    <View style={productInfo}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={txtName}>{toTitleCase('black of the')}</Text>
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={txtPrice}>{100}$</Text>
                        </View>
                        <View style={productController}>
                            <View style={numberOfProduct}>
                                <TouchableOpacity>
                                    <Text>+</Text>
                                </TouchableOpacity>
                                <Text>{3}</Text>
                                <TouchableOpacity>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={showDetailContainer} onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                                <Text style={txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Elevated>
                <Elevated elevation={3} style={productContainer}>
                    <Image source={sp5} style={productImage} />
                    <View style={productInfo}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={txtName}>{toTitleCase('black of the')}</Text>
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={txtPrice}>{100}$</Text>
                        </View>
                        <View style={productController}>
                            <View style={numberOfProduct}>
                                <TouchableOpacity>
                                    <Text>+</Text>
                                </TouchableOpacity>
                                <Text>{3}</Text>
                                <TouchableOpacity>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={showDetailContainer} onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                                <Text style={txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Elevated>
                <Elevated elevation={3} style={productContainer}>
                    <Image source={sp5} style={productImage} />
                    <View style={productInfo}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={txtName}>{toTitleCase('black of the')}</Text>
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={txtPrice}>{100}$</Text>
                        </View>
                        <View style={productController}>
                            <View style={numberOfProduct}>
                                <TouchableOpacity>
                                    <Text>+</Text>
                                </TouchableOpacity>
                                <Text>{3}</Text>
                                <TouchableOpacity>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={showDetailContainer} onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                                <Text style={txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Elevated>
            </ScrollView>
            <TouchableOpacity style={checkoutButton}>
                    <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
            </TouchableOpacity>
        </View>
    );
}
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 400) / 320;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#4895F0',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    productContainer: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    productInfo: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});