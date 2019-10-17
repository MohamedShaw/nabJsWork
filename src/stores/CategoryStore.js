import {action, computed, observable} from "mobx";
import Category from "../models/Category";
import * as API from "../api";
import ScreenComponent from "../screens/_base/screen-component";
import ListViewStore from "./ListViewStore";

class CategoryStore extends ListViewStore{

    @observable category= Array(Category);

    @action  setCategory = (data) => {
        if (data.length !== 0) {
            this.category = data
        }
        else {
            this.showEmptyListComponent()
        }
    };

    @computed  get getCategory () {
        return this.category
    };

    @action  getSubCategoryPageRequest = (categoryID) => {
        ScreenComponent.showActivityIndicator();
        return API.Controllers.Categories.get(categoryID)
    };

    @action  firstPageRequest = (categoryID) => {
        ScreenComponent.showActivityIndicator();
        API.Controllers.Categories.get(categoryID)
            .then(response => this.handelSuccessFirstPageRequest(response))
            .catch(error => this.handelFailedFirstPageRequest(error))
    };
     handelSuccessFirstPageRequest = (response) => {
        ScreenComponent.hideActivityIndicator();
        this.setCategory(response.data.categoryList)
    };
     handelFailedFirstPageRequest = (error) => {
        ScreenComponent.hideActivityIndicator()
        this.setCategory([])
    };


    @action  pullToRefreshRequest = (categoryID) => {
        this.showPullToRefreshIndicator();
        API.Controllers.Categories.get(categoryID)
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

export default CategoryStore