import axios, {
    AxiosRequestConfig,
    AxiosTransformer,
    AxiosAdapter,
    AxiosBasicCredentials,
    AxiosProxyConfig,
    CancelToken,
    CancelTokenSource,
    AxiosPromise,
    AxiosResponse
} from "axios";
import { RequestManager } from "./RequestManager";
import Sugar from 'sugar';
import qs from 'qs';

export const RequestTransformerFunc = (data, headers) => { };
export const ResponseTransformerFunc = (data) => { };
export const OnUploadProgressFunc = (progressEvent) => { };
export const OnDownloadProgressFunc = (progressEvent) => { };




export const RequestMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

const BaseRequestConfig = {
    // lib attr
    url: null,
    method: null,
    baseURL: null,

    headers: null,
    params: null,


    cancelToken: CancelToken

}



// TODO: add query string support
export class RequestBuilder {

    static _url;
    static _baseURL;
    static _method = RequestMethod.GET;
    static _headers = new Object();
    static _params = new Object();
    static _formData = new FormData();


    static _cancelToken = CancelTokenSource;

    constructor() {

        this._cancelToken = axios.CancelToken.source();
    }

    set_BaseUrl(baseUr) {
        this._baseURL = baseUrl;
        return this;
    }

    get_baseURL() {
        return this._baseURL;
    }

    set_url(url) {
        this._url = BaseRequestConfig.url;
    }

    setUrl(url) {
        console.log("**********************************************************************************************");

        this._url = BaseRequestConfig.url;
        return this;
    }
    get_params() {
        return this._params;
    }

    set_setParams(params) {
        this._params = params;
    }

    setParam(params) {
        console.log("******");

        this._params = params;
        return this;
    }

    addParam(key, value = null) {
        console.log("^^^^^", key, value);

        this._params[key] = value;
        console.log("afet set ", this._params[key] = value
        );

        return this;
    }


    get_method() {
        return this._method;
    }

    set_method(method = new RequestMethod()) {
        this._method = method;
    }

    setMethod(method = new RequestMethod()) {
        this._method = method;
        return this;
    }

    get_headers() {
        return this._headers;
    }

    set_headers(headers) {
        this._headers = headers;
    }

    addHeader(keyOrObject, value) {
        this._headers[keyOrObject] = value;
        return this;
    }

    removeHeader(key) {
        Sugar.Object.reject(this._headers, key);
        return this;
    }

    get_params() {
        return this._params;
    }

    set_setParams(params) {
        this._params = params;
    }

    setParam(params) {
        this._params = params;
        return this;
    }





    execute() {
        var config = BaseRequestConfig;



        config.url = 'http://alhudagroup-tr.com/API/';
        config.method = this._method.toString();
        config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

        switch (this._method) {
            case RequestMethod.GET:
            case RequestMethod.DELETE:
                config.params = this._params;
                break;
            case RequestMethod.POST:
                config.data = qs.stringify(this._params);
                break;
            case RequestMethod.PUT:
                config.data = this._params;
                break;
        }


        config.cancelToken = this._cancelToken.token;

        var request = RequestManager.axios.request(config);

        return request;
    }
}