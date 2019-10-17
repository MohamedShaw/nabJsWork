import { RequestBuilder, RequestMethod } from "./RequestBuilder";
import { ApiResponse } from "./ApiResponse";





export const Categories = (id) => {
    return new RequestBuilder()
        .setUrl('/getCategories.php')
        .addParam('id', id)
        .setMethod(RequestMethod.GET)
        .execute<ApiResponse>();

}
export const CategoriesById = (id) => {
    return new RequestBuilder()
        .setUrl('/getTopic.php')
        .addParam('id', id)
        .setMethod(RequestMethod.GET)
        .execute<ApiResponse>();

}


export const Wisdom = () => {

    function get() {
        return new RequestBuilder()
            .setUrl('/getTopWisdomList.php')
            .setMethod(RequestMethod.GET)
            .execute<ApiResponse>();
    }


    function getSingle() {
        return new RequestBuilder()
            .setUrl('/getSingleWisdomNew.php')
            .addParam("id", 0)
            .setMethod(RequestMethod.GET)
            .execute<ApiResponse>();
    }
}

export const New = () => {
    return new RequestBuilder()
        .setUrl('/getNewAlert.php')
        .setMethod(RequestMethod.GET)
        .execute<ApiResponse>();

}

export const Questions = (id) => {
    return new RequestBuilder()
        .setUrl('/getByCatPaging.php')
        .setMethod(RequestMethod.POST)
        .addParam("category", id)
        .addParam("column", "all")
        .addParam("i_page", 1)
        .addParam("i_size", 15)
        .execute<ApiResponse>();

}

export const SubCategory = (id) => {
    return new RequestBuilder()
        .setUrl('/getTopWisdom.php')
        .setMethod(RequestMethod.GET)
        .addParam("id", id)
        .execute<ApiResponse>();

}
