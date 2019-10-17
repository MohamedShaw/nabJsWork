/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet, Linking, ScrollView} from 'react-native';
import ScreenComponent from "../_base/screen-component";
import Navigation from '../../common/Navigation';
// import ValidationManager from "../../utils/validation-manager";
// import Header from "../../components/general/Header";
// import Instruction from "../../components/contact-us/Instruction";
import AppConstant from "../../constant/Constant";
// import Form from "../../components/contact-us/Form";
// import DrawerComponent from "../../components/general/DrawerComponent";




export default class ContactUsScreen extends ScreenComponent {
    static screenID = "ContactUsScreen";
    static screenName = "ContactUsScreen";
    static push = () =>  ScreenComponent.navigator.push({screen: ContactUsScreen.screenID});
    validationManager = new ValidationManager();
    onSendButtonClicked = () => {
        if (this.validationManager.validate()) {
            let name = 'الاسم:  ' + this.validationManager.inputsValue.name + "\n";
            let email = 'الايميل:  ' + this.validationManager.inputsValue.email + "\n";
            let subjectTitle = 'عنوان الموضوع:  ' + this.validationManager.inputsValue.subjectTitle + "\n";
            let subject = 'الموضوع:  ' + this.validationManager.inputsValue.subject + "\n";
            const message = name + email + subjectTitle + subject;
            Linking.openURL(`mailto:info@nabulsi.com?subject=اتصل بنا&body=${message}`);
        }
    };

    render() {
        return (
            // <DrawerComponent>
                <View style={styles.container}>
                    {/* <Header showBackButton={true} title={'اتصل بنا'}/> */}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* <Instruction/>
                        <Form onSendButtonClicked={this.onSendButtonClicked}
                              validationManager={this.validationManager}/> */}
                    </ScrollView>
                </View>
            // </DrawerComponent>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppConstant.Color.White
    },
});
