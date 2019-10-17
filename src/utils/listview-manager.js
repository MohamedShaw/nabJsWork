import {ApiResponse, ApiResponsePagination, RequestBuilder, RequestMethod} from "../api";
import {AxiosPromise} from "axios";

const  paginationInformation = {
    i_current_page,
    i_per_page,
    i_total_pages,
    i_total_objects,
    i_items_on_page,
}

export class ListViewManager {

    static pageNumber;
    static pageCount;
    static totalPage;
    static itemOnPage;
    static itemPerPage;
    static totalItem;
    static url;
    static requestMethod;
    static params = new Object();

    constructor() {
    }

    firstPage = () => {
        this.setPageNumber(1);
        return this.requestBuilder()
    };
    lastPage = () => {
        this.setPageNumber(-1);
        return this.requestBuilder()
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

    addParam(key, value) {
        this.params[key] = value;
        return this
    }

    removeParam(key) {
        delete this.params[key];
        return this
    }

    setPageNumber = (pageNumber) => {
        this.pageNumber = pageNumber;
        return this
    };

    setRequestMethod = (requestMethod) => {
        this.requestMethod = requestMethod;
        return this
    };

    get getPageNumber() {
        return this.pageNumber
    }

    setPageCount = (pageCount) => {
        this.pageCount = pageCount;
        this.addParam('i_size', this.pageCount);
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

    requestBuilder () {
        return new RequestBuilder()
            .setUrl(this.url)
            .setMethod(this.requestMethod ? RequestMethod.POST : RequestMethod.GET)
            .setParam(this.params)
            .addParam('i_page', this.getPageNumber)
            .execute();
    }


}
