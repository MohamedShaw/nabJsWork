import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";


import {ApiResponse} from ".";
import NotificationManager from "../utils/NotificationManager";
import ScreenComponent from "../screens/_base/screen-component";

export class RequestManager {
    private static _shared: RequestManager;

    private _axiosInstance!: AxiosInstance;

    public static get shared(): RequestManager {
        if (!this._shared) {
            let shared = new RequestManager();

            // Create an instance using the config defaults provided by the library
            // At this point the timeout config value is `0` as is the default for the library
            let axiosInstance: AxiosInstance = axios.create();

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

    public get axios(): AxiosInstance {
        return this._axiosInstance;
    }


    constructor() {
    }

    private _beforeExecutingRequestInterceptor;

    private beforeExecutingRequestSuccess(config: AxiosRequestConfig) {
        return config;
    }

    private beforeExecutingRequestError(error) {
        return Promise.reject(error);
    }

    private _afterReceivingResponseInterceptor;

    private afterReceivingResponseSuccess(response: AxiosResponse<ApiResponse>) {
        return response;
    }

    private afterReceivingResponseError(error) {
        if (!error.response) {
            ScreenComponent.showToast('تأكد من الاتصال بالانترنت');
            return Promise.reject(error);
        }
        else {
            return Promise.reject(error);
        }
    }
}