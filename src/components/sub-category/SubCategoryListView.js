/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { vw, vh } from "../../constant/UnitDim"
import SubCategoryListViewCell from "./SubCategoryListViewCell";
import Category from "../../models/Category";
import SubCategory from "../../models/SubCategory";
import AppConstant from "../../constant/Constant";



export default class SubCategoryListView extends PureComponent {

    _keyExtractor = (item, index) => index.toString();
    renderRefreshControl = () => (
        <RefreshControl
            refreshing={this.props.pullToRefreshIndicatorVisible}
            tintColor={AppConstant.Color.Black}
            onRefresh={this.props.onPullToRefreshFired}
        />
    );
    _renderItem = ({ item }) => {

        console.log("items", item);

        return (
            <SubCategoryListViewCell
                object={item}
                onSubCategoryListViewCellClicked={this.props.onSubCategoryListViewCellClicked}
            />
        );
    }

    render() {
        console.log("this.props.data",this.props.data);
        
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    onEndReachedThreshold={0.01}
                    onEndReached={this.props.loadMoreFired}
                    initialNumToRender={30}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    contentContainerStyle={styles.contentContainerStyle}
                    refreshControl={this.renderRefreshControl()}
                    ListEmptyComponent={this.props.renderEmptyComponent}
                />
                {this.props.renderFooterComponent}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {},
    contentContainerStyle: {
        alignItems: 'center',
        paddingVertical: 3.7 * vh,
    },
});
