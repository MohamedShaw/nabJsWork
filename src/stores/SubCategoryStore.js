import { action, computed, observable } from "mobx";
import ScreenComponent from "../screens/_base/screen-component";
import ListViewStore from "./ListViewStore";
import SubCategory from "../models/SubCategory";

import ListViewManger from "../utils/listview-manager";
class SubCategoryStore extends ListViewStore {

    @observable subCategory = Array(SubCategory);

    constructor() {
        super();
        console.log("********************************************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

        this.fetch()
        // parentID == 44 ?
        //     this.listViewManger
        //         .setURL('getByCatChildwithOrder.php')
        //         .addParam("category", id)
        //         .setRequestMethod("POST")
        //         .setPageNumber(1)
        //         .setPageCount(30)
        //     :
        //     this.listViewManger
        //         .setURL('getByCatPaging.php')
        //         .addParam("category", id)
        //         .addParam("column", 'all')
        //         .setRequestMethod("POST")
        //         .setPageNumber(1)
        //         .setPageCount(30)
    }

    fetch = (id, parentID) => {
        console.log("*** fffffffffffffffffffff", id, parentID);
        if (parentID === 44) {
            ListViewManger
                .setURL('getByCatChildwithOrder.php')
                .setRequestMethod("POST")
                .setPageNumber(1)
                .setPageCount(30)
                .firstPage(id, parentID)
        } else {
            ListViewManger
                .setURL('getByCatPaging.php')
                .setPageNumber(1)
                .setPageCount(30)
                .firstPage(id, parentID)

        }


    }
    @action setSubCategory = (data) => {
        if (data.length !== 0) {
            this.subCategory = data
        }
        else {
            this.subCategory=[]
            this.showEmptyListComponent()
        }
    };

    @action addSubCategory = (data) => {
        this.subCategory.push(...data)
    };

    @computed
    get getSubCategory() {
        return this.subCategory
    };

    @action firstPageRequest = () => {

        ScreenComponent.showActivityIndicator();
        ListViewManger.firstPage()
            .then(response => {
                console.log("response ()())()()()()()()()()()()()()()()()()()() -->>", response);
                this.handelSuccessFirstPageRequest(response)
            })
            .catch(error => this.handelFailedFirstPageRequest(error))
    };
    handelSuccessFirstPageRequest = (response) => {
        ScreenComponent.hideActivityIndicator();
        this.setSubCategory(response.data.newsList.length !== 0 ? response.data.newsList : [])
    };
    handelFailedFirstPageRequest = (error) => {
        console.log(error.response);
        ScreenComponent.hideActivityIndicator()
    };

    @action loadMoreRequest = () => {
        this.showLoadMoreActivityIndicator();
        console.log("********* load more");
        
        ListViewManger.nextPage()
            .then(response => this.handelSuccessLoadMoreRequest(response))
            .catch(error => this.handelFailedLoadMoreRequest(error))
    };
    handelSuccessLoadMoreRequest = (response) => {
        this.addSubCategory(response.data.newsList);
        this.hideLoadMoreActivityIndicator();
    };
    handelFailedLoadMoreRequest = (error) => {
        this.hideLoadMoreActivityIndicator();
    };


    @action pullToRefreshRequest = () => {
        this.showPullToRefreshIndicator();
        ListViewManger.firstPage()
            .then(response => this.handelSuccessPullToRefreshRequest(response))
            .catch(error => this.handelFailedPullToRefreshRequest(error))

    };

    handelSuccessPullToRefreshRequest = (response) => {
        this.hidePullToRefreshIndicator();
        this.setSubCategory(response.data.newsList.length !== 0 ? response.data.newsList : [])
    };
    handelFailedPullToRefreshRequest = (error) => {
        this.hidePullToRefreshIndicator();
    };


}

export default new SubCategoryStore()