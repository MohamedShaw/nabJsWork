/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {View, StyleSheet, FlatList, RefreshControl, Image} from 'react-native';
import {vw, vh} from "../../constant/UnitDim"
import CategoryListViewCell from "./CategoryListViewCell";
import Category from "../../models/Category";
import AppConstant from "../../constant/Constant";


export default class CategoryListView extends PureComponent {

 
    _keyExtractor = (item, index) => index.toString();
    renderRefreshControl = () => (
        <RefreshControl
            refreshing={this.props.pullToRefreshIndicatorVisible}
            tintColor={AppConstant.Color.Black}
            onRefresh={this.props.onPullToRefreshFired}
        />
    );
    _renderItem = ({item, index}) => {
        
        return (
            <CategoryListViewCell
                object={item}
                index={index}
                categoryIcon={this.props.categoryIcon}
                onCategoryListViewCellClicked={this.props.onCategoryListViewCellClicked}
            />
        )
    };

    render() {
        console.log("******* data -->>>", this.props.data);
        
        return (
            <FlatList
                style={{marginTop: 3.2 * vh}}
                contentContainerStyle={{alignItems: 'center'}}
                data={this.props.data}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                showsVerticalScrollIndicator={false}
                refreshControl={this.renderRefreshControl()}
                ListEmptyComponent={this.props.renderEmptyComponent}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
