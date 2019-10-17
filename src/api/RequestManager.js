import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// import ScreenComponent from "../screens/_base/screen-component";

export class RequestManager {
    static _shared = new RequestManager();

    static _axiosInstance = AxiosInstance;

    shared() {
        if (!this._shared) {
            let shared = new RequestManager();

            // Create an instance using the config defaults provided by the library
            // At this point the timeout config value is `0` as is the default for the library
            let axiosInstance = axios.create();

            // Override timeout default for the library
            // Now all requests will wait 10 seconds before timing out
            // axiosInstance.defaults.timeout = 10000;

            // Default Headers
            // var offset = -(new Date().getTimezoneOffset());

            axiosInstance.defaults.baseURL = 'http://alhudagroup-tr.com/API/';
            axiosInstance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';


            // Add a request interceptor
            shared._beforeExecutingRequestInterceptor = axiosInstance.interceptors.request.use(
                shared.beforeExecutingRequestSuccess,
                shared.beforeExecutingRequestError
            );
            // shared.interceptors.request.eject(shared._beforeExecutingRequestInterceptor);
            // shared._beforeExecutingRequestInterceptor = null;

            // Add a response interceptor
            shared._afterReceivingResponseInterceptor = axiosInstance.interceptors.response.use(
                shared.afterReceivingResponseSuccess,
                shared.afterReceivingResponseError
            );

            shared._axiosInstance = axiosInstance;

            this._shared = shared;
        }
        return this._shared
    }



    constructor() {
    }

    static _beforeExecutingRequestInterceptor;

    static beforeExecutingRequestSuccess(config = new AxiosRequestConfig()) {
        return config;
    }

    static beforeExecutingRequestError(error) {
        return Promise.reject(error);
    }

    static _afterReceivingResponseInterceptor;

    static afterReceivingResponseSuccess(response = new AxiosResponse()) {
        return response;
    }

    static afterReceivingResponseError(error) {
        if (!error.response) {
            // ScreenComponent.showToast('تأكد من الاتصال بالانترنت');
            return Promise.reject(error);
        }
        else {
            return Promise.reject(error);
        }
    }
}