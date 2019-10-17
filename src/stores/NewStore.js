import { action, computed, observable } from "mobx";
import New from "../models/New";
import * as API from "../api";
import ScreenComponent from "../screens/_base/screen-component";
import ListViewStore from "./ListViewStore";
import SubCategory from "../models/SubCategory";

class NewStore extends ListViewStore {

    @observable new?: Array<New>;
    subCategory?: Array<SubCategory> = [];

    @action private setNew = (data: Array<New>) => {
        if (data.length !== 0) {
            this.new = data
        }
        else {
            this.showEmptyListComponent()
        }
    };

    @computed
    public get getNew(): Array<New> {
        return this.new!
    };

    @action private addSubCategory = (data: Array<SubCategory>) => {
        this.subCategory!.push(...data)
    };

    @computed
    public get geSubCategory(): Array<SubCategory> {
        return this.subCategory!
    };

    @action public firstPageRequest = () => {
        ScreenComponent.showActivityIndicator();
        API.Controllers.New.get()
            .then(response => {
                console.log("response ---->", response)
                this.handelSuccessFirstPageRequest(response)
            })
            .catch(error => this.handelFailedFirstPageRequest(error))
    };
    private handelSuccessFirstPageRequest = (response) => {
        ScreenComponent.hideActivityIndicator();
        this.setNew(response.data.updateList);
        this.getNew.map((item, value) => {
            this.getSubCategoryRequest(item.article_id!)
        })
    };
    private handelFailedFirstPageRequest = (error) => {
        ScreenComponent.hideActivityIndicator()
    };


    @action public pullToRefreshRequest = () => {
        this.showPullToRefreshIndicator();
        API.Controllers.New.get()
            .then(response => this.handelSuccessPullToRefreshRequest(response))
            .catch(error => this.handelFailedPullToRefreshRequest(error))

    };
    private handelSuccessPullToRefreshRequest = (response) => {
        this.hidePullToRefreshIndicator();
        this.setNew(response.data.updateList)
    };
    private handelFailedPullToRefreshRequest = (error) => {
        this.hidePullToRefreshIndicator();
    };

    @action public getSubCategoryRequest = (id: number) => {
        console.log("id -->>>", id);
        
        API.Controllers.SubCategory.get(id)
            .then(response =>{ console.log("sub Categery", response);
             this.handelSuccessSubCategoryRequest(response)})
            .catch(error => this.handelFailedSubCategoryRequest(error))
    };
    private handelSuccessSubCategoryRequest = (response) => {
        this.addSubCategory(response.data.wisdomList)
    };
    private handelFailedSubCategoryRequest = (error) => {
    };


}

export default NewStore