import { action, computed, observable } from "mobx";
import * as API from "../api";
// import ScreenComponent from "../screens/_base/screen-component";
import Category from "../models/Category";
import Wisdom from "../models/Wisdom"
import { Categories, CategoriesById, getSingle, getWisdomList, getNew } from "../api/Controllers";

class MainStore {


    @observable category = Array(Category);
    fatwaCategory = Array(Category);
    @observable wisdom =[Wisdom];

    @action  setCategory = (data = Array(Category)) => {
        this.category = data
    };

    @computed  get getCategory() {
        return this.category

    };

    @computed
    get getWisdom() {
        
        return this.wisdom
    };


    @action static getCategoryRequest = () => {
        ScreenComponent.showActivityIndicator();
        API.Controllers.Categories.get(0)
            .then(response => this.handelSuccessCategoryRequest(response))
            .catch(error => this.handelFailedCategoryRequest(error))
    };

    static handelSuccessCategoryRequest = (response) => {
        ScreenComponent.hideActivityIndicator();
        this.setCategory(response.data.categoryList)
    };
    static handelFailedCategoryRequest = (error) => {
        ScreenComponent.hideActivityIndicator()
    };



    @action
    getWisdomRequest = () => {
        // ScreenComponent.showActivityIndicator();
        console.log("***********سسسس");
        

        const res = getSingle().then(res => {
            this.handelSuccessWisdomRequest(res)


        })

        // .then(response => {
        //     console.log("get singleWisdom", response)
        // })
        // .catch(error => this.handelFailedWisdomRequest(error))
    };

    handelSuccessWisdomRequest = (response) => {
        // ScreenComponent.hideActivityIndicator();

        this.wisdom = response.data.wisdomList[0];

    };
    static handelFailedWisdomRequest = (error) => {
        ScreenComponent.hideActivityIndicator()
    }


}

export default new MainStore()