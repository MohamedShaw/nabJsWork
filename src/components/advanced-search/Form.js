/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import CheckBox from 'react-native-modest-checkbox'
import {Icon} from 'native-base'
import {vw, vh} from "../../constant/UnitDim"
import AppConstant from "../../constant/Constant";
import ModalDropdown from 'react-native-modal-dropdown';
import ValidationManager from "../../utils/validation-manager";





export default class Form extends PureComponent {
    categoryID= "";
    state = {
        searchScope: "البحث في العناوين فقط",
        searchIndex: 0,
        IslamicEducation: false,
        IHadithsRamadaan: false,
        Speeches: false,
        PropheticTradition: false,
        IslamicCreed: false,
        Biography: false,
        Works: false,
        IslamicFiqh: false,
        InterpretationHolyQuran: false,
        LiteraryTopics: false,
        ExternalLectures: false,
        ScientificSubjects: false,
        IslamicTopics: false,
        TopicsOther: false,
        RadioSeminars: false,
        MiscellaneousTopics: false,
        TVSeminars: false,
    };

    dropDownListRef;
    searchInputValue;
    helpWordInputValue;

    componentWillMount() {
        this.onIslamicEducationClicked(true, 150);
        this.onIHadithsRamadaanClicked(true, 212);
        this.onSpeechesClicked(true, 44);
        this.onPropheticTraditionClicked(true, 104);
        this.onIslamicCreedClicked(true, 55);
        this.onBiographyClicked(true, 114);
        this.onInterpretationHolyQuranClicked(true, 97);
        this.onLiteraryTopicsClicked(true, 1242);
        this.onExternalLecturesClicked(true, 800);
        this.onWorksClicked(true, 1229);
        this.onIslamicFiqhClicked(true, 142);
        this.onScientificSubjectsClicked(true, 182);
        this.onIslamicTopicsClicked(true, 175);
        // this.onTopicsOtherClicked(true, 1558);
        this.onRadioSeminarsClicked(true, 801);
        this.onMiscellaneousTopicsClicked(true, 1249);
        this.onTVSeminarsClicked(true, 799);
        this.searchInputValue = this.props.keyword;


    }

    onSearchScopeButtonClicked = () => this.dropDownListRef.show();
    onSelectSearchScope = (value, index) => {
        this.setState({searchScope: value, searchIndex: index})
    };


    onIslamicEducationClicked = (checked, index) => {
        if (this.state.IslamicEducation) {
            this.setState({IslamicEducation: false});
            this.categoryID = this.categoryID.replace("150,", '');
        }
        else {
            this.setState({IslamicEducation: true});
            this.categoryID += "150,";
        }
    };
    onIHadithsRamadaanClicked = (checked , index) => {
        if (this.state.IHadithsRamadaan) {
            this.setState({IHadithsRamadaan: false});
            this.categoryID = this.categoryID.replace("212,", '');

        }
        else {
            this.setState({IHadithsRamadaan: true});
            this.categoryID += "212,";
        }

    };
    onSpeechesClicked = (checked , index) => {
        if (this.state.Speeches) {
            this.setState({Speeches: false});
            this.categoryID = this.categoryID.replace("44,", '');
        }
        else {
            this.setState({Speeches: true});
            this.categoryID += "44,";
        }

    };
    onPropheticTraditionClicked = (checked , index) => {
        if (this.state.PropheticTradition) {
            this.setState({PropheticTradition: false});
            this.categoryID = this.categoryID.replace("104,", '');
        }
        else {
            this.setState({PropheticTradition: true});
            this.categoryID += "104,";
        }
    };

    onIslamicCreedClicked = (checked , index) => {
        if (this.state.IslamicCreed) {
            this.setState({IslamicCreed: false});
            this.categoryID = this.categoryID.replace("55,", '');
        }
        else {
            this.setState({IslamicCreed: true});
            this.categoryID += "55,";

        }

    };
    onBiographyClicked = (checked , index) => {
        if (this.state.Biography) {
            this.setState({Biography: false});
            this.categoryID = this.categoryID.replace("114,", '');
        }
        else {
            this.setState({Biography: true});
            this.categoryID += "114,";

        }
    };
    onWorksClicked = (checked , index) => {
        if (this.state.Works) {
            this.setState({Works: false});
            this.categoryID = this.categoryID.replace("1229,", '');

        }
        else {
            this.setState({Works: true});
            this.categoryID += "1229,";
        }

    };
    onIslamicFiqhClicked = (checked , index) => {
        if (this.state.IslamicFiqh) {
            this.setState({IslamicFiqh: false});
            this.categoryID = this.categoryID.replace("142,", '');
        }
        else {
            this.setState({IslamicFiqh: true});
            this.categoryID += "142,";
        }

    };
    onInterpretationHolyQuranClicked = (checked , index) => {
        if (this.state.InterpretationHolyQuran) {
            this.setState({InterpretationHolyQuran: false});
            this.categoryID = this.categoryID.replace("97,", '');
        }
        else {
            this.setState({InterpretationHolyQuran: true});
            this.categoryID += "97,";
        }

    };
    onLiteraryTopicsClicked = (checked , index) => {
        if (this.state.LiteraryTopics) {
            this.setState({LiteraryTopics: false});
            this.categoryID = this.categoryID.replace("1242,", '');
        }
        else {
            this.setState({LiteraryTopics: true});
            this.categoryID += "1242,";
        }

    };
    onExternalLecturesClicked = (checked , index) => {
        if (this.state.ExternalLectures) {
            this.setState({ExternalLectures: false});
            this.categoryID = this.categoryID.replace("800,", '');
        }
        else {
            this.setState({ExternalLectures: true});
            this.categoryID += "800,";

        }

    };
    onScientificSubjectsClicked = (checked , index) => {
        if (this.state.ScientificSubjects) {
            this.setState({ScientificSubjects: false});
            this.categoryID = this.categoryID.replace("182,", '');
        }
        else {
            this.setState({ScientificSubjects: true});
            this.categoryID += "182,";

        }

    };
    onIslamicTopicsClicked = (checked , index) => {
        if (this.state.IslamicTopics) {
            this.setState({IslamicTopics: false});
            this.categoryID = this.categoryID.replace("175,", '');
        }
        else {
            this.setState({IslamicTopics: true});
            this.categoryID += "175,";

        }

    };
    onTopicsOtherClicked = (checked , index) => {
        if (this.state.TopicsOther) {
            this.setState({TopicsOther: false});
            this.categoryID = this.categoryID.replace("1558,", '');
        }
        else {
            this.setState({TopicsOther: true});
            this.categoryID += "1558,";

        }

    };
    onRadioSeminarsClicked = (checked , index) => {
        if (this.state.RadioSeminars) {
            this.setState({RadioSeminars: false});
            this.categoryID = this.categoryID.replace("801,", '');
        }
        else {
            this.setState({RadioSeminars: true});
            this.categoryID += "801,";

        }

    };
    onMiscellaneousTopicsClicked = (checked , index) => {
        if (this.state.MiscellaneousTopics) {
            this.setState({MiscellaneousTopics: false});
            this.categoryID = this.categoryID.replace("1249,", '');
        }
        else {
            this.setState({MiscellaneousTopics: true});
            this.categoryID += "1249,";
        }

    };
    onTVSeminarsClicked = (checked , index) => {
        if (this.state.TVSeminars) {
            this.setState({TVSeminars: false});
            this.categoryID = this.categoryID.replace("799,", '');
        }
        else {
            this.setState({TVSeminars: true});
            this.categoryID += "799,";
        }

    };


    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>
                            عبارة البحث
                        </Text>
                        <View style={styles.inputItem}>
                            <TextInput
                                defaultValue={this.searchInputValue}
                                style={styles.input}
                                placeholder={'عبارة البحث'}
                                onChangeText={(value) => this.searchInputValue = value}
                                placeholderTextColor={AppConstant.Color.GrayLightThree}
                            />
                        </View>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>
                            كلمات مساعدة
                        </Text>
                        <View style={styles.inputItem}>
                            <TextInput
                                defaultValue={this.helpWordInputValue}
                                style={styles.input}
                                onChangeText={(value) => this.helpWordInputValue = value}
                                placeholder={'كلمات مساعدة'}
                                placeholderTextColor={AppConstant.Color.GrayLightThree}
                            />
                        </View>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputTitle}>
                            حالة البحث في موقع النابلسي
                        </Text>
                        <TouchableOpacity style={styles.inputOptionView}
                                          onPress={this.onSearchScopeButtonClicked}>
                            <View style={styles.iconView}>
                                <Icon style={styles.icon} name={'md-arrow-dropdown'}/>
                            </View>
                            <ModalDropdown
                                defaultValue={"البحث في العناوين فقط"}
                                defaultIndex={0}
                                style={styles.modalDropDownView}
                                ref={(c) => this.dropDownListRef = c}
                                disabled={true}
                                textStyle={styles.modalDropDownText}
                                dropdownTextStyle={styles.dropDownText}
                                onSelect={(index, value) => this.onSelectSearchScope(value, index)}
                                options={['البحث في العناوين فقط', "البحث الشامل للنصوص"]}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.checkBoxView}>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2}
                                labelStyle={styles.checkBoxTitle}
                                label='التربية الإسلامية'
                                labelBefore={true}
                                checked={this.state.IslamicEducation}
                                onChange={(checked) => this.onIslamicEducationClicked(checked.checked, 150)}
                            />
                        </View>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                label='أحاديث رمضان'
                                labelBefore={true}
                                checked={this.state.IHadithsRamadaan}
                                onChange={(checked) => this.onIHadithsRamadaanClicked(checked.checked, 212)}
                            />
                        </View>
                    </View>
                    <View style={styles.checkBoxView}>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                label='الخطب'
                                labelBefore={true}
                                checked={this.state.Speeches}
                                onChange={(checked) => this.onSpeechesClicked(checked.checked, 44)}
                            />
                        </View>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                label='الحديث الشريف'
                                checked={this.state.PropheticTradition}
                                onChange={(checked) => this.onPropheticTraditionClicked(checked.checked, 104)}
                                labelBefore={true}/>
                        </View>
                    </View>
                    <View style={styles.checkBoxView}>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                onChange={(checked) => this.onIslamicCreedClicked(checked.checked, 55)}
                                checked={this.state.IslamicCreed}
                                label='العقيدة الإسلامية'
                                labelBefore={true}/>
                        </View>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                onChange={(checked) => this.onBiographyClicked(checked.checked, 114)}
                                numberOfLabelLines={2}
                                labelStyle={styles.checkBoxTitle}
                                checked={this.state.Biography}
                                label='السيرة'
                                labelBefore={true}/>
                        </View>
                    </View>
                    <View style={styles.checkBoxView}>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                onChange={(checked) => this.onWorksClicked(checked.checked, 1229)}
                                checked={this.state.Works}
                                label='المؤلفات'
                                labelBefore={true}/>
                        </View>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                onChange={(checked) => this.onIslamicFiqhClicked(checked.checked, 142)}
                                checked={this.state.IslamicFiqh}
                                label='الفقه الإسلامي'
                                labelBefore={true}/>
                        </View>
                    </View>
                    <View style={styles.checkBoxView}>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                label='تفسير القرآن الكريم المرئي'
                                onChange={(checked) => this.onInterpretationHolyQuranClicked(checked.checked, 97)}
                                checked={this.state.InterpretationHolyQuran}
                                labelBefore={true}/>
                        </View>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                label='موضوعات أدبية'
                                onChange={(checked) => this.onLiteraryTopicsClicked(checked.checked, 1242)}
                                checked={this.state.LiteraryTopics}
                                labelBefore={true}/>
                        </View>
                    </View>
                    <View style={styles.checkBoxView}>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                label='محاضرات خارجية'
                                onChange={(checked) => this.onExternalLecturesClicked(checked.checked, 800)}
                                checked={this.state.ExternalLectures}
                                labelBefore={true}/>
                        </View>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                label='موضوعات علمية'
                                checked={this.state.ScientificSubjects}
                                onChange={(checked) => this.onScientificSubjectsClicked(checked.checked, 182)}
                                labelBefore={true}/>
                        </View>
                    </View>
                    <View style={styles.checkBoxView}>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                label='موضوعات إسلامية'
                                checked={this.state.IslamicTopics}
                                onChange={(checked) => this.onIslamicTopicsClicked(checked.checked, 175)}
                                labelBefore={true}/>
                        </View>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                label='ندوات تلفزيونية'
                                checked={this.state.TVSeminars}
                                onChange={(checked) => this.onTVSeminarsClicked(checked.checked, 799)}
                                labelBefore={true}/>
                        </View>
                      
                    </View>

                    <View style={styles.checkBoxView}>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                label='ندوات اذاعية'
                                checked={this.state.RadioSeminars}
                                onChange={(checked) => this.onRadioSeminarsClicked(checked.checked, 801)}
                                labelBefore={true}/>
                        </View>
                        <View style={styles.checkBoxItemView}>
                            <CheckBox
                                checkedImage={require("../../assets/images/checkbox.png")}
                                uncheckedImage={require("../../assets/images/checkbox_empty.png")}
                                numberOfLabelLines={2} labelStyle={styles.checkBoxTitle}
                                checked={this.state.MiscellaneousTopics}
                                label='موضوعات متنوعة'
                                onChange={(checked) => this.onMiscellaneousTopicsClicked(checked.checked, 1249)}
                                labelBefore={true}/>
                        </View>
                    </View>

                    {/*<View style={styles.checkBoxView}>*/}
                    {/*<View style={styles.checkBoxItemView}>*/}

                    {/*</View>*/}
                    {/**/}
                    {/*</View>*/}

                    <TouchableOpacity style={styles.buttonView} onPress={() => {
                        let column;
                        if (this.state.searchIndex == 0) {
                            column = 'title'
                        }
                        else if (this.state.searchIndex == 1) {
                            column = 'text'

                        }
                        else {
                            column = 'all'

                        }
                        const data = {
                            searchInputValue: this.searchInputValue,
                            helpWordInputValue: this.helpWordInputValue,
                            column: column,
                            category: this.categoryID.slice(0, -1),
                        };

                        console.log("data to search", data);
                        
                        this.props.onSendButtonClciked(data)
                    }}>
                        <Text style={{
                            color: AppConstant.Color.White,
                            fontFamily: AppConstant.Font.SansArabicBold,
                            fontSize: 16
                        }}>
                            بحث
                        </Text>
                    </TouchableOpacity>


                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 2 * vh,
        paddingHorizontal: 4.2 * vw,
    },
    inputItem: {
        width: '100%',
        height: 6 * vh,
        marginTop: 1 * vh,
        borderWidth: 1,
        borderColor: AppConstant.Color.GrayMiddle,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 5,
        backgroundColor: AppConstant.Color.White
    },
    input: {
        textAlign: 'right',
        width: '100%',
        height: '100%',
        marginRight: 8.8 * vw,
        borderBottomStartRadius: 7.3 * vh / 2,
        color: AppConstant.Color.Black,
        fontFamily: AppConstant.Font.SansArabic,
        fontSize: 1.7 * vh
    },
    inputTextAreaItem: {
        height: 35.9 * vh,
        width: '100%',
        marginTop: 1 * vh,
        borderWidth: 1,
        borderColor: AppConstant.Color.GrayMiddle,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: AppConstant.Color.White
    },
    inputTitle: {
        textAlign: 'right', fontFamily: AppConstant.Font.SansArabic, fontSize: 18
    },
    inputView: {
        marginBottom: 3.2 * vh
    },
    buttonView: {
        width: "100%",
        backgroundColor: AppConstant.Color.Yellow,
        height: 5.9 * vh,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 4.9 * vh
    },
    checkBoxView: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        marginTop: 3.2 * vh
    },
    checkBoxTitle: {
        textAlign: 'right',
        marginHorizontal: 3 * vh,
        fontSize: 4 * vw,
        fontFamily: AppConstant.Font.SansArabicBold
    },
    inputOptionView: {
        width: '100%',
        height: 6 * vh,
        marginTop: 1 * vh,
        borderWidth: 1,
        borderColor: AppConstant.Color.GrayMiddle,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: AppConstant.Color.White
    },
    iconView: {
        flex: 0.1,
        height: '100%',
        backgroundColor: AppConstant.Color.Yellow,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: AppConstant.Color.White
    },
    modalDropDownView: {
        flex: 0.9, alignItems: 'flex-end', paddingRight: 8.8 * vw,
    },
    modalDropDownText: {
        color: AppConstant.Color.Black,
        fontFamily: AppConstant.Font.SansArabicBold,
        fontSize: 1.7 * vh,
        textAlign: 'right'
    },
    dropDownText: {
        color: AppConstant.Color.Black,
        fontFamily: AppConstant.Font.SansArabic,
        fontSize: 11,
        textAlign: 'right'
    },
    errorMessageStyle: {
        textAlign: 'right',
        fontSize: 10,
        marginRight: 8.8 * vw,
        fontFamily: AppConstant.Font.SansArabic,
        color: 'red',
    },
    checkBoxItemView: {
        width: '50%',
        alignItems: 'flex-end',
        paddingLeft: 5 * vw
    }

});
