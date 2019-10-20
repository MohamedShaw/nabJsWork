import {action, observable} from "mobx";
import SubCategory from "../models/SubCategory";
import {AsyncStorage} from "react-native";
import BookMark from "../models/BookMark";

class BookMarkStore {


    @observable bookmark = {data: []};

    constructor() {
        this.getAllBookMark();
    }

    @action setBookMark = (bookmark) => {
        this.bookmark.data = bookmark;
        AsyncStorage.setItem("bookmark", JSON.stringify(this.bookmark));
    };
    @action addBookMark = (bookmark) => {
        this.bookmark.data.unshift(bookmark);
        AsyncStorage.setItem("bookmark", JSON.stringify(this.bookmark));
    };

    @action removeBookMark = (index) => {
        this.bookmark.data = this.bookmark.data.filter(item => item.id !== index);
        AsyncStorage.setItem("bookmark", JSON.stringify(this.bookmark));
    };

    getBookMarkStatues = (id) => {
        let statues = false;
        if (this.bookmark.data.length !== 0) {
            this.bookmark.data.map((item, index) => {
                if (item.id == id) {
                    statues = true
                }
            });
        }
        return statues
    };

    getAllBookMark = () => {
        AsyncStorage.getItem('bookmark')
            .then(value => {
                if (value) {
                    this.bookmark = JSON.parse(value);
                }
            });
    };

}

export default new BookMarkStore()