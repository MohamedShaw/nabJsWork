/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import { Col, Row, Grid } from "react-native-easy-grid";
import AppConstant from "../../constant/Constant";
import ScreenComponent from "../../screens/_base/screen-component";

import Navigation from "../../common/Navigation";

export default class Header extends PureComponent{

   
    onBackButtonClicked = () => {
        this.props.isBackToRoot ? ScreenComponent.popToRoot() : ScreenComponent.pop()
    };

    onSideMenuButtonClicked = () => {
        // Navigation.openMenu();
        ScreenComponent.toggleDrawer();
     
    };

    render() {
        return (
            <View style={this.props.isGrayBackground ? styles.containerGray : styles.containerYellow}>
                <Grid>
                    <Col size={15} style={styles.leftSideView}>
                        {this.props.showBackButton &&
                            <TouchableOpacity style={styles.leftSideButtonView} onPress={this.onBackButtonClicked}>
                                <Image style={{ width: 22, height: 18 }}
                                    source={require('../../assets/images/back_ic.png')} />
                            </TouchableOpacity>
                        }
                    </Col>
                    <Col size={70} style={styles.centerSideView}>
                        <Text style={styles.title} numberOfLines={1}>
                            {this.props.title}
                        </Text>
                    </Col>
                    <Col size={15} style={styles.rightSideView}>
                        <TouchableOpacity style={styles.rightSideButtonView} onPress={this.onSideMenuButtonClicked}>
                            <Image resizeMode={'contain'} style={{ width: 22, height: 18 }}
                                source={require('../../assets/images/side_menu_ic.png')} />
                        </TouchableOpacity>
                    </Col>
                </Grid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerYellow: {
        height: 10 * vh,
        backgroundColor: AppConstant.Color.Yellow,
    },
    containerGray: {
        height: 10 * vh,
        paddingHorizontal: 4 * vw,
        backgroundColor: AppConstant.Color.Gray,
    },
    leftSideView: {
        height: '100%',
        alignItems: 'flex-start',
        paddingLeft: 4 * vw,
    },
    leftSideButtonView: {
        width: '100%', height: '100%', justifyContent: 'center',
        alignItems: 'flex-start',
    },
    centerSideView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightSideView: {
        justifyContent: 'center',
        paddingRight: 4 * vw,
    },
    rightSideButtonView: {
        width: '100%', height: '100%', justifyContent: 'center',
        alignItems: 'flex-end',

    },
    title: {
        fontSize: 13,
        fontFamily: AppConstant.Font.SansArabicBold,
        color: AppConstant.Color.White
    }
});
