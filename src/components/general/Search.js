/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import AppConstant from "../../constant/Constant";
import { Icon } from "native-base";
import SearchScreen from "../../screens/search/SearchScreen";




export default class Search extends PureComponent {
    state = {
        inputValue: ''
    };

    onSearchButtonClicked = (keyword) => {
        SearchScreen.push(keyword);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputItem}>
                    <TextInput
                        style={styles.input}
                        placeholder={'بحث'}
                        placeholderTextColor={AppConstant.Color.GrayMiddle}
                        selectionColor={AppConstant.Color.GrayMiddle}
                        returnKeyLabel={'search'}
                        value={this.state.inputValue}
                        onSubmitEditing={() => {
                            this.onSearchButtonClicked(this.state.inputValue);
                            this.setState({ inputValue: '' })
                        }}
                        onChangeText={(value) => this.setState({ inputValue: value })}
                    />
                </View>
                <TouchableOpacity onPress={() => {
                    this.onSearchButtonClicked(this.state.inputValue);
                    this.setState({ inputValue: '' })
                }}>
                    <Icon style={{ color: AppConstant.Color.Gray }} name={'md-search'} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2 * vh,
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 7 * vw,
        borderWidth: 1.5,
        borderColor: AppConstant.Color.GrayMiddle,
        borderTopEndRadius: 7.3 * vh / 2,
        borderBottomStartRadius: 7.3 * vh / 2,
        backgroundColor: AppConstant.Color.White,

    },
    inputView: {
        paddingHorizontal: 2.4 * vh,
    },
    inputItem: {
        width: '100%',
        minHeight: 5 * vh,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'right',
    },
    input: {
        textAlign: 'right',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        marginRight: 3 * vw,
        borderBottomStartRadius: 7.3 * vh / 2,
        color: AppConstant.Color.GrayMiddle,
        fontFamily: AppConstant.Font.SansArabic,
    },
});
