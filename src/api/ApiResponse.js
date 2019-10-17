import {AxiosPromise} from "axios";
import {RequestBuilder, RequestMethod} from "./RequestBuilder";
// import Category from "../models/Category";


export class ApiResponseStatus {
     static success;
     static code;
     static message;
}

export class ApiResponsePagination {
     static i_current_page;
     static i_per_page;
     static i_total_pages;
     static i_total_objects;
     static i_items_on_page;
}

export class ApiResponse {
     static status =new ApiResponseStatus();
     static pagination = new ApiResponsePagination();
    //  static categoryList = [Category];
     
}

// export { ApiResponse, ApiResponseStatus };