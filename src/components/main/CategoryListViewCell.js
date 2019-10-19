/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ImageStyle, Text } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import AppConstant from "../../constant/Constant";
import Category from "../../models/Category";

const listItemWidth = [1, 1.5];
const listItemColor = [AppConstant.Color.Yellow, AppConstant.Color.Gray, AppConstant.Color.YellowDark];





export default class CategoryListViewCell extends PureComponen {


    renderItem = () => {
        return (
            <TouchableOpacity
                onPress={() => this.props.onListViewCellClicked(this.props.object.id, this.props.object.name)}
                style={[styles.rightListItem, { backgroundColor: listItemColor[Math.floor(Math.random() * 3)] }]}>
                <Image style={styles.image  }
                    source={require('../../assets/images/pattern_list_item.png')}
                />
                <Text numberOfLines={2} style={styles.listTitle}>{this.props.object.name}</Text>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderItem()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rightListItem: {
        height: 16.1 * vh,
        width: 91.4 * vw,
        // backgroundColor: listItemColor[Math.floor(Math.random() * 3)],
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 1 * vh,
    },
    leftListItem: {
        height: 16.1 * vh,
        // backgroundColor: listItemColor[Math.floor(Math.random() * 3)],
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 1 * vh,
        borderLeftWidth: 6,
        borderLeftColor: AppConstant.Color.White
    },
    image: {
        width: 91.4 * vw, height: 3.9 * vh, position: 'absolute', top: 0
    },
    listTitle: {
        color: AppConstant.Color.White,
        fontSize: 23,
        fontFamily: AppConstant.Font.SansArabic,
        marginRight: 5.6 * vw,
        marginBottom: 1.8 * vh,
        flexWrap: 'wrap',
        textAlign: 'right',
    }
});
