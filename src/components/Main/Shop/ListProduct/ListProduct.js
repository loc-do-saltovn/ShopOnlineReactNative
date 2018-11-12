import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

import backList from '../../../../media/appIcon/backList.png'
import sp1 from '../../../../media/temp/sp1.jpeg'
import sp2 from '../../../../media/temp/sp2.jpeg'
import sp3 from '../../../../media/temp/sp3.jpeg'
import sp4 from '../../../../media/temp/sp4.jpeg'

type Props = {};
export default class ListProduct extends Component<Props> {
  render() {
    const { container, wrapper, header, title, backStyle, productContainer, productInfo,
           productImage, lastRowInfo, txtName, txtPrice, txtMaterial, txtColor, txtShowDetail  } 
           = styles;
    return (
      <View style={container}>
          <ScrollView style={wrapper}>
              <View style={header}>
                <TouchableOpacity onPress= {()=> this.props.navigation.goBack()}>
                  <Image source={backList} style={backStyle}/>
                </TouchableOpacity>
                <Text style={title}>Party Dress</Text>
                <View />
              </View>
              <View style= {productContainer}>
                <Image source={sp1} style={productImage}/>
                <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material sik</Text>
                  <View style={lastRowInfo}>
                    <Text style={txtColor}>Color RoyalBlue</Text>
                    <View style={{backgroundColor: 'royalblue', height: 16, width: 16, borderRadius: 8}}/>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                      <Text style={txtShowDetail}>SHOW DETAIL</Text> 
                    </TouchableOpacity>
                  </View>
                </View> 
              </View>
              <View style= {productContainer}>
                <Image source={sp2} style={productImage}/>
                <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material sik</Text>
                  <View style={lastRowInfo}>
                    <Text style={txtColor}>Color RoyalBlue</Text>
                    <View style={{backgroundColor: 'royalblue', height: 16, width: 16, borderRadius: 8}}/>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                      <Text style={txtShowDetail}>SHOW DETAIL</Text> 
                    </TouchableOpacity>
                  </View>
                </View> 
              </View>
              <View style= {productContainer}>
                <Image source={sp3} style={productImage}/>
                <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material sik</Text>
                  <View style={lastRowInfo}>
                    <Text style={txtColor}>Color RoyalBlue</Text>
                    <View style={{backgroundColor: 'royalblue', height: 16, width: 16, borderRadius: 8}}/>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                      <Text style={txtShowDetail}>SHOW DETAIL</Text> 
                    </TouchableOpacity>
                  </View>
                </View> 
              </View>
              <View style= {productContainer}>
                <Image source={sp4} style={productImage}/>
                <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material sik</Text>
                  <View style={lastRowInfo}>
                    <Text style={txtColor}>Color RoyalBlue</Text>
                    <View style={{backgroundColor: 'royalblue', height: 16, width: 16, borderRadius: 8}}/>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('ProductDetail')}>
                      <Text style={txtShowDetail}>SHOW DETAIL</Text> 
                    </TouchableOpacity>
                  </View>
                </View> 
              </View>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBDB",
  },
  wrapper: {
    backgroundColor: "#FFF",
    margin: 10
  },
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 5,
  },
  title: {
      color: '#B10D65',
      fontSize: 15,
  },
  backStyle: {
    width: 30,
    height: 30,
  }, 
  productContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    padding: 7,
    borderTopColor: '#F0F0F0',
    borderBottomColor: '#FFF',
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderWidth: 2,

  },
  productInfo: {
    justifyContent: 'space-between',
    marginLeft: 15,
    flex: 1,
  },
  productImage: {
    height: 130,
    width: (90*452) / 361
  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txtName:{
    color: '#BCBCBC',
    fontSize: 17,
    fontWeight: '300', 
  },
  txtPrice: {
    color: '#B10D65',
    fontSize: 14,
    fontWeight: '100'
  },
  txtMaterial: {
    fontSize: 14,
    fontWeight: '100',
  },
  txtColor: {

  },
  txtShowDetail: {
    color: '#B10D65',
    fontSize: 11,
  }
});
