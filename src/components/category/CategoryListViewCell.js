/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, ImageStyle } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import AppConstant from "../../constant/Constant";
import Category from "../../models/Category";
import getCategoryImage from "../../utils/Image";




export default class CategoryListViewCell extends PureComponent {

    render() {
        // index % 4 == 0 && (this.isYellowCellColor = !this.isYellowCellColor);
        
        return (
            <TouchableOpacity
                onPress={() => this.props.onCategoryListViewCellClicked(this.props.object.id, this.props.object.parent_id, this.props.object.name)}
                style={this.props.index % 2 == 0 ? styles.containerYellow : styles.containerGray}>
                <Image resizeMode={'contain'} style={styles.image }
                    source={this.props.categoryIcon ? this.props.categoryIcon : getCategoryImage(this.props.object.id)} />
                <Text style={styles.title}>{this.props.object.name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    containerYellow: {
        marginBottom: 15,
        paddingHorizontal: 5 * vw,
        width: 90.6 * vw,
        minHeight: 19.4 * vh,
        borderRadius: 25,
        shadowColor: AppConstant.Color.Black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: AppConstant.Color.YellowDark
    },
    containerGray: {
        marginBottom: 15,
        paddingHorizontal: 5 * vw,
        width: 90.6 * vw,
        minHeight: 19.4 * vh,
        borderRadius: 25,
        shadowColor: AppConstant.Color.Black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: AppConstant.Color.Gray
    },
    image: {
        width: 70,
        height: 70,
        flex: 0.4,
        tintColor: AppConstant.Color.White
    },
    title: {
        flex: 0.6,
        flexWrap: 'wrap',
        textAlign: 'right',
        color: AppConstant.Color.White,
        fontFamily: AppConstant.Font.SansArabic,
        fontSize: 25,

    }
});
