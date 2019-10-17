/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ScreenComponent from "../_base/screen-component";
// import Header from "../../components/general/Header";
// import WisdomSection from "../../components/main/WisdomSection";
// import CategoryListView from "../../components/main/CategoryListView";
// import CategoryScreen from "../category/CategoryScreen";
// import PatternBackground from "../../components/general/PatternBackground";
// import Search from "../../components/general/Search";
// import MainStore from "../../strores/MainStore";
import { observer } from "mobx-react";
// import Drawer from 'react-native-drawer'
import SideMenuScreen from "../../../src/screens/side-menu/SideMenuScreen";
import Navigation from '../../common/Navigation';
// import DrawerComponent from "../../components/general/DrawerComponent";



@observer
export default class MainScreen extends ScreenComponent {
    static screenID = "MainScreen";
    static screenTitle = "موسوعة النابلسي للعلوم الإسلامية";
    static push = () => Navigation.push({ screen: MainScreen.screenID });

    _drawer;

 

    componentDidMount() {
        // MainStore.share.getWisdomRequest();
        ScreenComponent.drawer = this._drawer;

    }

    onListViewCellClicked = (categoryID, categoryName) => {
        CategoryScreen.push(categoryID, categoryName);
    };



    render() {
        return (
            // <DrawerComponent>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                {/* <PatternBackground />
                    <Header title={MainScreen.screenTitle} />
                    <View style={{ alignItems: 'center' }}>
                        <Search />
                    </View>
                    <WisdomSection wisdom={MainStore.share.getWisdom} />
                    <CategoryListView
                        data={MainStore.share.getCategory}
                        onListViewCellClicked={this.onListViewCellClicked}
                    /> */}
            </ScrollView>
            // </DrawerComponent>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"red"
    }
});
