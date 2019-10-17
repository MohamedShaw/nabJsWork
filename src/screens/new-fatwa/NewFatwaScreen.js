/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import ScreenComponent from "../_base/screen-component";
// import Header from "../../components/general/Header";
// import PatternBackground from "../../components/general/PatternBackground";
// import ValidationManager from "../../utils/validation-manager";
import AppConstant from "../../constant/Constant";
// import Form from "../../components/new-fatwa/Form";
// import DrawerComponent from "../../components/general/DrawerComponent";


import Navigation from "../../common/Navigation";


export default class NewFatwaScreen extends ScreenComponent {
    static screenID = "NewFatwaScreen";
    static screenName = "NewFatwaScreen";
    static push = () =>  Navigation.push({ name: NewFatwaScreen.screenID });
    validationManager = new ValidationManager();
    onSendButtonClicked = () => {

        if (this.validationManager.validate()) {
            let name = 'الاسم:  ' + this.validationManager.inputsValue.name + "\n";
            let email = 'الايميل:  ' + this.validationManager.inputsValue.email + "\n";
            let fatwa = 'الفتوى:  ' + this.validationManager.inputsValue.fatwa + "\n";
            let priority = 'اهمية الفتوى:  ' + this.validationManager.inputsValue.priority + "\n";
            let statues = 'حالة الفتوى الفتوى:  ' + this.validationManager.inputsValue.statues;
            const message = name + email + fatwa + priority + statues;
            Linking.openURL(`mailto:ar-fatwa@nabulsi.com?subject=إرسال فتوى جديدة&body=${message}`);
        }
    };

    render() {
        return (
            // <DrawerComponent>
                <View style={styles.container}>
                    {/* <PatternBackground />
                    <Header title={"إرسال فتوى جديدة"} showBackButton={true} />
                    <Form
                        onSendButtonClicked={this.onSendButtonClicked}
                        validationManager={this.validationManager}
                    /> */}
                </View>
            // </DrawerComponent>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppConstant.Color.White,
        flex: 1,
    },
});
