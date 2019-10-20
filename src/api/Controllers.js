import { RequestBuilder, RequestMethod } from "./RequestBuilder";
import { ApiResponse } from "./ApiResponse";
import Axios from "axios";

import { BASE_API, CONTENT_TYPE } from "../utils/api";



export const Categories = async (id) => {
    console.log("*****************************");
    
    try {
        const response = await Axios.get(`${BASE_API}/getCategories.php`, {
            params: {
                'id': id
            },
            headers: {
                CONTENT_TYPE
            }
        })
        console.log("response -->>", response);
        
        return response;


    } catch (error) {
        if (!error.response) {
            // ScreenComponent.showToast('تأكد من الاتصال بالانترنت');
            return Promise.reject(error);
        }
        else {
            return Promise.reject(error);
        }
    }


}
export const CategoriesById = async (id) => {

    try {
        const response = await Axios.get(`${BASE_API}/getTopic.php`, {
            params: {
                'id': id
            },
            headers: {
                CONTENT_TYPE
            }
        })


    } catch (error) {
        if (!error.response) {
            // ScreenComponent.showToast('تأكد من الاتصال بالانترنت');
            return Promise.reject(error);
        }
        else {
            return Promise.reject(error);
        }
    }



}


export const getWisdomList = async () => {
    try {
        const response = await Axios.get(`${BASE_API}/getTopWisdomList.php`, {

            headers: {
                CONTENT_TYPE
            }
        })


    } catch (error) {
        if (!error.response) {
            // ScreenComponent.showToast('تأكد من الاتصال بالانترنت');
            return Promise.reject(error);
        }
        else {
            return Promise.reject(error);
        }
    }

}
export const getSingle = async () => {

    try {
        const response = await Axios.get(`${BASE_API}/getSingleWisdomNew.php`, {
            params: {
                // id: 0
            },
            headers: {
                CONTENT_TYPE
            }
        })
        return response;

    } catch (error) {
        if (!error.response) {
            // ScreenComponent.showToast('تأكد من الاتصال بالانترنت');
            return Promise.reject(error);
        }
        else {
            return Promise.reject(error);
        }
    }


}


export const getNew = async () => {

    try {
        const response = await Axios.get(`${BASE_API}/getNewAlert.php`, {

            headers: {
                CONTENT_TYPE
            }
        })


    } catch (error) {
        if (!error.response) {
            // ScreenComponent.showToast('تأكد من الاتصال بالانترنت');
            return Promise.reject(error);
        }
        else {
            return Promise.reject(error);
        }
    }


}

export const Questions = async (id) => {


    try {
        const response = await Axios.post(`${BASE_API}/getByCatPaging.php`, {
            params: {
                "category": id,
                "column": "all",
                "i_page": 1,
                "i_size": 15
            },

            headers: {
                CONTENT_TYPE
            }
        })


    } catch (error) {
        if (!error.response) {
            // ScreenComponent.showToast('تأكد من الاتصال بالانترنت');
            return Promise.reject(error);
        }
        else {
            return Promise.reject(error);
        }
    }



}

export const SubCategory = async (id) => {

    try {
        const response = await Axios.get(`${BASE_API}/getTopWisdom.php`, {
            params: {
                "id": id
            }
            ,

            headers: {
                CONTENT_TYPE
            }
        })


    } catch (error) {
        if (!error.response) {
            // ScreenComponent.showToast('تأكد من الاتصال بالانترنت');
            return Promise.reject(error);
        }
        else {
            return Promise.reject(error);
        }
    }


}
