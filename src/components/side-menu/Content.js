/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ImageStyle, Platform } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import AppConstant from "../../constant/Constant";
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const aspectRatio = height / width;



export default class Content extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode={'contain'} style={styles.image }
                        source={require("../../assets/images/app_logo_img.png")} />
                </View>
                <View style={styles.listView}>
                    <TouchableOpacity style={styles.buttonView} onPress={this.props.onMainButtonClicked}>
                        <Text style={styles.buttonTitle}>الصفحة الرئيسية</Text>
                        <Image resizeMode={'contain'} style={styles.icon }
                            source={require("../../assets/images/main_ic.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView} onPress={this.props.onVideoChannelButtonClicked}>
                        <Text style={styles.buttonTitle}>القناة المرئية</Text>
                        <Image resizeMode={'contain'} style={styles.icon }
                            source={require("../../assets/images/video_ic.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView} onPress={this.props.onSoundChannelButtonClicked}>
                        <Text style={styles.buttonTitle}>القناة الصوتية</Text>
                        <Image resizeMode={'contain'} style={styles.icon }
                            source={require("../../assets/images/sound_ic.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView} onPress={this.props.onWisdomButtonClicked}>
                        <Text style={styles.buttonTitle}>الحكم</Text>
                        <Image resizeMode={'contain'} style={styles.icon }
                            source={require("../../assets/images/wisdom_ic.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView} onPress={this.props.onQuestionButtonClicked}>
                        <Text style={styles.buttonTitle}>الأسئلة والفتاوى</Text>
                        <Image resizeMode={'contain'} style={styles.icon }
                            source={require("../../assets/images/question_ic.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView} onPress={this.props.onEmailButtonClicked}>
                        <Text style={styles.buttonTitle}>الاشتراك بالنشرة البريدية</Text>
                        <Image resizeMode={'contain'} style={styles.icon }
                            source={require("../../assets/images/mail_ic.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView} onPress={this.props.onBookMarkButtonClicked}>
                        <Text style={styles.buttonTitle}>الإشارات المرجعية</Text>
                        <Image resizeMode={'contain'} style={styles.icon }
                            source={require("../../assets/images/bookmark_ic.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView} onPress={this.props.onNewButtonClicked}>
                        <Text style={styles.buttonTitle}>جديدنا</Text>
                        <Image resizeMode={'contain'} style={styles.icon }
                            source={require("../../assets/images/new_ic.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView} onPress={this.props.onContactUsButtonClicked}>
                        <Text style={styles.buttonTitle}>اتصل بنا</Text>
                        <Image resizeMode={'contain'} style={styles.icon }
                            source={require("../../assets/images/conact_ic.png")} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 0.1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 3.1 * vh,
                    width: '100%'
                }}>
                    <TouchableOpacity onPress={this.props.onInstagramButtonClicked}>
                        <Image resizeMode={'contain'} style={styles.socialIcon  }
                            source={require("../../assets/images/instagram_ic.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onYouTubeButtonClicked}>
                        <Image resizeMode={'contain'} style={styles.socialIcon  }
                            source={require("../../assets/images/youtube_ic.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onSoundCloudButtonClicked}>

                        <Image resizeMode={'contain'} style={styles.socialIcon  }
                            source={require("../../assets/images/soundcloud_ic.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onTwitterButtonClicked}>

                        <Image resizeMode={'contain'} style={styles.socialIcon  }
                            source={require("../../assets/images/twitter_ic.png")} />
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={this.props.onFaceBookButtonClicked}>

                        <Image resizeMode={'contain'} style={styles.socialIcon  }
                            source={require("../../assets/images/facebook_ic.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onWhatsAppButtonClicked}>
                        <Image resizeMode={'contain'} style={styles.socialIcon  }
                            source={require("../../assets/images/whatsapp_ic.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppConstant.Color.GrayExtremLight,
        flex: 1,
    },
    listView: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: 9 * vw,
        paddingVertical: 3.5 * vh,
    },
    image: {
        marginTop: 4 * vh,
        width: 160,
        height: 70,
    },
    icon: {
        width: 3 * vw,
        height: 3 * vh,
    },
    socialIcon: {
        width: 15,
        height: 15,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: AppConstant.Color.Gray,
        fontSize: aspectRatio > 1.6 ? 4.7 * vw : 14,
        fontFamily: AppConstant.Font.SansArabic,
        marginRight: 10,
        textAlign: 'right'
    }
});
