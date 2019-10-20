import { action, computed, observable } from "mobx";
import Category from "../models/Category";
import * as API from "../api";
import ScreenComponent from "../screens/_base/screen-component";
import ListViewStore from "./ListViewStore";
import { Categories } from "../api/Controllers";
class CategoryStore extends ListViewStore {
  
    

    @observable category = [];

    @action setCategory = (data) => {
        if (data.length !== 0) {
            console.log("data not equal to 0", data);
            
            this.category = data
        }
        else {
            this.showEmptyListComponent()
        }
    };

    @computed get getCategory() {
        return this.category
    };

    @action getSubCategoryPageRequest = (categoryID) => {
        ScreenComponent.showActivityIndicator();
        return Categories(categoryID)
    };

    @action 
    firstPageRequest = (categoryID) => {
        // ScreenComponent.showActivityIndicator();
        Categories(categoryID)
            .then(response => this.handelSuccessFirstPageRequest(response))
            .catch(error => this.handelFailedFirstPageRequest(error))
    };
    handelSuccessFirstPageRequest = (response) => {
        console.log("res in store -->>", response.data.categoryList);
        
        ScreenComponent.hideActivityIndicator();
        this.setCategory(response.data.categoryList)
    };
    handelFailedFirstPageRequest = (error) => {
        ScreenComponent.hideActivityIndicator()
        this.setCategory([])
    };


    @action pullToRefreshRequest = (categoryID) => {
        this.showPullToRefreshIndicator();
        Categories(categoryID)
            .then(response => this.handelSuccessPullToRefreshRequest(response))
            .catch(error => this.handelFailedPullToRefreshRequest(error))

    };

    handelSuccessPullToRefreshRequest = (response) => {
        this.hidePullToRefreshIndicator();
        this.setCategory(response.data.categoryList)
    };
    handelFailedPullToRefreshRequest = (error) => {
        this.hidePullToRefreshIndicator();
    };



}

export default new CategoryStore()