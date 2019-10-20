/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageStyle, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Col, Row, Grid } from "react-native-easy-grid";
import { vw, vh } from "../../constant/UnitDim"
import AppConstant from "../../constant/Constant";
import SubCategory from "../../models/SubCategory";
import moment from "moment";
import BookMarkStore from "../../stores/BookMarkStore";
import * as API from "../../api";

import { inject } from "mobx-react";

const bookmark = require("../../assets/images/bookmark_unselected_ic.png");
const bookmark_selected = require("../../assets/images/bookmark_selected_ic.png");



@inject('BookMarkStore')
export default class SubCategoryListViewCell extends PureComponent {

    state = {
        bookmarkImage: bookmark,
        isBookMarkSelected: false,
        isShowOptionButton: false,
        object: null,
        loading: false
    };

    componentWillMount() {
        console.log("this.props", this.props);
        
        // if (this.props.BookMarkStore.getBookMarkStatues(this.props.object.id)) {
        //     this.setState({ bookmarkImage: bookmark_selected, isBookMarkSelected: true })
        // }
        // else {
        //     this.setState({ bookmarkImage: bookmark, isBookMarkSelected: false })
        // }
    }



    renderVideoButton = () => {
        if (this.props.object.attach.length !== 0 && this.props.object.attach[0].hasOwnProperty('yt') && this.props.object.attach[0].yt) {
            return (
                <TouchableOpacity style={styles.button}
                    onPress={() => this.props.onSubCategoryListViewCellClicked(2, this.state.object)}>
                    <Image resizeMode={'contain'} style={styles.buttonIcon }
                        source={require("../../assets/images/video_gold_ic.png")} />
                    <Text style={styles.buttonTitle}>فيديو</Text>
                </TouchableOpacity>
            )
        }
    };
    renderSoundButton = () => {
        if (this.props.object.attach.length !== 0 && this.props.object.attach[0].hasOwnProperty('sc') && this.props.object.attach[0].sn) {
            return (
                <TouchableOpacity style={styles.button}
                    onPress={() => this.props.onSubCategoryListViewCellClicked(1, this.state.object)}>
                    <Image resizeMode={'contain'} style={styles.buttonIcon }
                        source={require("../../assets/images/sound_gold_ic.png")} />
                    <Text style={styles.buttonTitle}>صوت</Text>
                </TouchableOpacity>
            )
        }
    };
    renderTextWithImageButton = () => {
        if (this.props.object.hasOwnProperty('image') && this.props.object.image) {
            return (
                <TouchableOpacity style={styles.button}
                    onPress={() => this.props.onSubCategoryListViewCellClicked(0, this.state.object)}>
                    <Image resizeMode={'contain'} style={styles.buttonIcon }
                        source={require("../../assets/images/text_img_ic.png")} />
                    <Text style={styles.buttonTitle}>نص</Text>
                </TouchableOpacity>
            )
        }
    };
    renderPDFButton = () => {
        if (this.props.object.attach.length !== 0 && this.props.object.attach[0].hasOwnProperty('pd') && this.props.object.attach[0].pd) {
            return (
                <TouchableOpacity style={styles.button}
                    onPress={() => this.props.onSubCategoryListViewCellClicked(4, this.state.object)}>
                    <Image resizeMode={'contain'} style={styles.buttonIcon}
                        source={require("../../assets/images/pdf_ic.png")} />
                    <Text style={styles.buttonTitle}>PDF</Text>
                </TouchableOpacity>
            )
        }
    };
    renderPrintButton = () => {
        if (this.props.object.attach.length !== 0 && this.props.object.attach[0].hasOwnProperty('pd') && this.props.object.attach[0].pd) {
            return (
                <TouchableOpacity style={styles.button}
                    onPress={() => this.props.onSubCategoryListViewCellClicked(5, this.state.object)}>
                    <Image resizeMode={'contain'} style={styles.buttonIcon }
                        source={require("../../assets/images/printer_ic.png")} />
                    <Text style={styles.buttonTitle}>طباعة</Text>
                </TouchableOpacity>
            )
        }
    };
    onCellClicked = () => {
        const { id } = this.props.object
        if (this.state.isShowOptionButton) {

            this.setState({ isShowOptionButton: false, object: null })
        }
        else {
            this.setState({
                loading: true
            })
            API.Controllers.CategoriesById.get(id)
                .then(response => {
                    console.log("hmassa", response)
                    this.setState({
                        object: response.data.newsList[0],
                        loading: false
                    })
                    // this.handelSuccessWisdomRequest(response)
                })
                .catch(error => this.setState({
                    loading: false

                })
                )
            this.setState({ isShowOptionButton: true, })
        }
    };

    onBookMarkClicked = () => {
        if (this.state.isBookMarkSelected) {
            this.setState({ bookmarkImage: bookmark, isBookMarkSelected: false });
            BookMarkStore.shared.removeBookMark(this.props.object.id)
        }
        else {
            this.setState({ bookmarkImage: bookmark_selected, isBookMarkSelected: true });
            BookMarkStore.shared.addBookMark(this.props.object)
        }
    };

    render() {
        return (
            <Animatable.View useNativeDriver={true} animation={'fadeInUp'} style={styles.container}>
                <TouchableOpacity style={styles.bookmarkView} onPress={this.onBookMarkClicked}>
                    <Image style={styles.bookmarkImage }
                        source={this.state.bookmarkImage} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onCellClicked}>
                    <View style={styles.cellView}>
                        <Col style={styles.leftView} size={1}>
                            <Text numberOfLines={1} style={styles.dataTitle}>
                                تاريخ الموضوع
                            </Text>
                            <Text numberOfLines={1} style={styles.title}>
                                {/* {moment(this.props.object.article_date).format('DD/MM/YYYY')} */}
                            </Text>
                        </Col>
                        <Col style={styles.centerView} size={2}>
                            <Text numberOfLines={this.props.isShortTitle ? 1 : 0} style={styles.title}>
                                {/* {this.props.object.title.slice(this.props.object.title.indexOf(':') + 1)} */}
                            </Text>
                        </Col>
                    </View>
                </TouchableOpacity>
                {this.state.isShowOptionButton &&
                    <Animatable.View useNativeDriver={true} animation={'fadeIn'} style={styles.buttonView}>
                        {this.state.loading ? <ActivityIndicator style={{ alignSelf: 'center' }} size="large" color={"#B388FF"} /> : <>
                            {this.renderPrintButton()}
                            {this.renderPDFButton()}
                            {this.renderVideoButton()}
                            {this.renderSoundButton()}
                            <TouchableOpacity style={styles.button}
                                onPress={() => this.state.object !== null && this.props.onSubCategoryListViewCellClicked(3, this.state.object)}>
                                <Image resizeMode={'contain'} style={styles.buttonIcon }
                                    source={require("../../assets/images/text_ic.png")} />
                                {(this.props.object.hasOwnProperty('image') && this.props.object.image
                                    ?
                                    <Text style={styles.buttonTitle}>نص بدون{"\n"}صور</Text>

                                    :
                                    <Text style={styles.buttonTitle}>نص</Text>
                                )}
                            </TouchableOpacity>
                            {this.renderTextWithImageButton()}
                        </>}
                    </Animatable.View>
                }
            </Animatable.View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppConstant.Color.White,
        borderRadius: 9,
        width: 100 * vw,
        minHeight: 5 * vh,
        paddingVertical: 1 * vh,
        shadowColor: "#000",
        alignItems: 'center'
    },
    cellView: {
        borderRadius: 9,
        width: 90.6 * vw,
        minHeight: 5 * vh,
        flexDirection: 'row',
        marginTop: 3.8 * vh / 2,
        paddingVertical: 1 * vh,
        backgroundColor: AppConstant.Color.Gray,
        zIndex: 3
    },
    leftView: {
        justifyContent: 'center', alignItems: 'center'
    },
    rightView: {
        justifyContent: 'center', alignItems: 'center'

    },
    centerView: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: AppConstant.Color.White,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 3.4 * vw
    },
    dataTitle: {
        color: AppConstant.Color.White,
        fontFamily: AppConstant.Font.SansArabic,
        fontSize: 11,
    },
    title: {
        color: AppConstant.Color.White,
        fontFamily: AppConstant.Font.SansArabic,
        fontSize: 15,
        textAlign: 'right'
    },
    subTitle: {
        color: AppConstant.Color.White,
        fontFamily: AppConstant.Font.SansArabic,
        fontSize: 10,
    },
    bookmarkView: {
        backgroundColor: AppConstant.Color.GrayLightTwo,
        justifyContent: 'center',
        alignItems: 'center',
        width: 6.9 * vw,
        height: 3.8 * vh,
        borderRadius: 3.8 * vh / 2,
        position: 'absolute',
        right: 2 * vw / 2,
        top: 0.5 * vh / 2,
        zIndex: 1

    },
    bookmarkImage: {
        width: 10.31,
        height: 12.19
    },
    buttonView: {
        flex: 1,
        width: 90 * vw,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        borderBottomRightRadius: 9,
        borderBottomLeftRadius: 9,
        paddingVertical: 2 * vh,
        paddingTop: 3 * vh,
        zIndex: -1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    button: {
        flex: 1,
        height: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonTitle: {
        textAlign: 'center',
        fontFamily: AppConstant.Font.SansArabic,
        fontSize: 14,
        color: AppConstant.Color.YellowDark,
        lineHeight: 17,
    },
    buttonIcon: {
        width: 20,
        height: 18
    }
});
