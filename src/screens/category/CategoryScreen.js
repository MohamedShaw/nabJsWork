/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet, Text, TextStyle, Image } from 'react-native';
import ScreenComponent from "../_base/screen-component";
import Navigation from '../../common/Navigation';
import CategoryListView from "../../components/category/CategoryListView";
import PatternBackground from "../../components/general/PatternBackground";
import Header from "../../components/general/Header";
import SubCategoryScreen from "../sub-category/SubCategoryScreen";
import CategoryStore from "../../stores/CategoryStore";
import { vw, vh } from "../../constant/UnitDim"
import { observer , inject} from "mobx-react";
import AppConstant from "../../constant/Constant";
import Search from "../../components/general/Search";
import DrawerComponent from "../../components/general/DrawerComponent";
import getCategoryImage from "../../utils/Image";


@inject('CategoryStore')
@observer
export default class CategoryScreen extends ScreenComponent {
    static screenID = "CategoryScreen";
    static screenName = "CategoryScreen";
    static push = (categoryID, categoryName, categoryIcon) => ScreenComponent.navigator.push({
        screen: CategoryScreen.screenID,
        navigatorStyle: {
            navBarHidden: true,
        },
        passProps: { categoryID: categoryID, categoryName: categoryName, categoryIcon: categoryIcon }
    });
    // store = new CategoryStore();/

    componentDidMount() {
        this.props.CategoryStore.firstPageRequest(this.props.categoryID);
    }

    onListPullToRefreshFired = () => {
        this.props.CategoryStore.pullToRefreshRequest(this.props.categoryID);
    };

    renderListEmptyComponent = () => {
        if (this.props.CategoryStore.getEmptyListComponentStatues) {
            return (<Text style={styles.emptyListTitle}>لا يوجد بيانات لعرضها</Text>)
        }
        else {
            return <View />
        }
    };

    onCategoryListViewCellClicked = (id, parentID, screenTitle) => {
        console.log("********************");
        
        this.props.CategoryStore.getSubCategoryPageRequest(id)
            .then(res => {
                if (res.data.categoryList.length !== 0) {
                    CategoryScreen.push(id, screenTitle, getCategoryImage(id))
                }
                else {
                    SubCategoryScreen.push(id, parentID, screenTitle)
                }
            });
    };

    render() {
        return (
            <DrawerComponent>
                <View style={styles.container}>
                    <PatternBackground />
                    <Header showBackButton={true} title={this.props.categoryName} />
                    <View style={{ alignItems: 'center' }}>
                        <Search />
                    </View>
                    <CategoryListView
                        data={this.props.CategoryStore.getCategory}
                        categoryIcon={this.props.categoryIcon}
                        onCategoryListViewCellClicked={this.onCategoryListViewCellClicked}
                        onPullToRefreshFired={this.onListPullToRefreshFired}
                        renderEmptyComponent={this.renderListEmptyComponent()}
                        pullToRefreshIndicatorVisible={this.props.CategoryStore.getPullToRefreshIndicatorStatues}
                    /> 
                </View>
            </DrawerComponent>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppConstant.Color.White
    },
    emptyListTitle: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: AppConstant.Font.SansArabic,
        color: AppConstant.Color.Black,
    },
});
