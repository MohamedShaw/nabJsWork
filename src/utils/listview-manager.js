import Axios, { AxiosPromise } from "axios";
import { BASE_API, CONTENT_TYPE } from "../utils/api";

const paginationInformation = {
    i_current_page: 1,
    i_per_page: 1,
    i_total_pages: null,
    i_total_objects: null,
    i_items_on_page: null,
}

class ListViewManager {

    static pageNumber;
    static pageCount;
    static totalPage;
    static itemOnPage;
    static itemPerPage;
    static totalItem;
    static url;
    static requestMethod;

    static params = new Object();


    firstPage = (id, parentID) => {
        console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

        this.setPageNumber(1);
        return this.requestBuilder(id)
    };
    lastPage = () => {
        this.setPageNumber(-1);
        // return this.requestBuilder()
    };
    nextPage = () => {
        if (this.allowGoToNextPage()) {
            this.increasePageNumber();
            return this.requestBuilder()
        }
        else {
            return this.requestBuilder()
        }
    };
    previousPage = () => {
        if (this.allowGoToPreviousPage()) {
            this.decreasePageNumber();
            return this.requestBuilder()
        }
    };

    setURL(url) {
        this.url = url;
        return this;
    };


    addParam(key, value = null) {
       
        this.params[key] = value;
        return this
    }
    setPageNumber = (pageNumber) => {
        this.pageNumber = pageNumber;
        return this
    };


    get getPageNumber() {
        return this.pageNumber
    }

    setPageCount = (pageCount) => {
        this.pageCount = pageCount;
        return this
    };

    get getPageCount() {
        return this.pageCount
    }

    setTotalPage = (totalPage) => {
        this.totalPage = totalPage;
        return this
    };

    get geTotalPage() {
        return this.totalPage
    }

    setItemOnPage = (itemOnPage) => {
        this.itemOnPage = itemOnPage;
        return this
    };

    get getItemOnPage() {
        return this.itemOnPage
    }

    setItemPerPage = (itemPerPage) => {
        this.itemPerPage = itemPerPage;
        return this
    };

    get getItemPerPage() {
        return this.itemPerPage
    }

    setTotalItem = (totalItem) => {
        this.totalItem = totalItem;
        return this
    };

    get getTotalItem() {
        return this.totalItem
    }

    increasePageNumber = () => {
        this.setPageNumber(this.getPageNumber + 1)
    };

    decreasePageNumber = () => {
        this.setPageNumber(this.getPageNumber - 1)

    };

    setPaginationInformation = (paginationInformation) => {
        this.setPageNumber(paginationInformation.i_current_page);
        this.setTotalPage(paginationInformation.i_total_pages);
        this.setItemOnPage(paginationInformation.i_items_on_page);
        this.setItemPerPage(paginationInformation.i_per_page);
        this.setTotalItem(paginationInformation.i_total_objects);
    };

    allowGoToNextPage = () => {
        return this.getItemOnPage === this.getItemPerPage;
    };
    allowGoToPreviousPage = () => {
        return this.getPageNumber > 1;
    };


    async requestBuilder(id) {
        console.log("*************", id, this.requestMethod);
        const idCat =id;

        if (this.requestMethod) {
            console.log("if 888888");
            
            try {

                const res = await Axios.post(`${BASE_API}/${this.url}`, {
                    params: {
                        'category': id,
                        'i_page': this.getPageNumber
                    },
                    headers: {
                        CONTENT_TYPE
                    }
                })
                console.log("response -->>>", res);
                return res;


            } catch (error) {
                console.log("error ->>", JSON.parse(JSON.stringify(error)));

            }

        } else {
            console.log("idCat" , idCat);
            
            try {

                const res = await Axios.get(`${BASE_API}/${this.url}`, {
                    params: {
                        'category': idCat,

                        "column": 'all',
                        'i_page': this.getPageNumber,
                        'i_size': this.getPageCount
                    },
                    headers: {
                        CONTENT_TYPE
                    }
                })
                console.log("response -->>>", res);
                return res;


            } catch (error) {
                console.log("error ->>", JSON.parse(JSON.stringify(error)));

            }
        }
       
    }


}

export default new ListViewManager()