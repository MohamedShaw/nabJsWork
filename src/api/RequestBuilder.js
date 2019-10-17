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




const RequestMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

export class BaseResponse extends AxiosResponse {
    static config = new BaseRequestConfig();
}



export class BaseRequestConfig extends AxiosRequestConfig {
    // lib attr
    url;
    method;
    baseURL;

    headers;
    params;
    data;
    timeout;
    withCredentials;
    responseType;
    xsrfCookieName;
    xsrfHeaderName;

    maxContentLength;
    maxRedirects;
    httpAgent;
    httpsAgent;

    // new attr
    responseKey;
    responseClass;

    constructor() {
    }
}



// TODO: add query string support
export class RequestBuilder {

    static _url;
    static _baseURL;
    static _method =  RequestMethod.GET;
    static _headers = new Object();
    static _params = new Object();
    static _formData = new FormData();


    static _cancelToken = new CancelTokenSource();

    constructor() {

        this._cancelToken = axios.CancelToken.source();
    }

    public setBaseUrl(baseUrl: string) {
        this._baseURL = baseUrl;
        return this;
    }

    public get baseURL() {
        return this._baseURL;
    }

    public set url(url: string) {
        this._url = url;
    }

    public setUrl(url: string) {
        this._url = url;
        return this;
    }

    public get method() {
        return this._method;
    }

    public set method(method: RequestMethod) {
        this._method = method;
    }

    public setMethod(method: RequestMethod) {
        this._method = method;
        return this;
    }

    public get headers() {
        return this._headers;
    }

    public set headers(headers: any) {
        this._headers = headers;
    }

    public addHeader(keyOrObject: string, value: string) {
        this._headers[keyOrObject] = value;
        return this;
    }

    public removeHeader(key: string) {
        Sugar.Object.reject(this._headers, key);
        return this;
    }

    public get params() {
        return this._params;
    }

    public set setParams(params: any) {
        this._params = params;
    }

    public setParam(params: any) {
        this._params = params;
        return this;
    }

    public addParam(key: string, value: any = null) {
        this._params[key] = value;
        return this;
    }


    public addFormData(key: string, value: any = null) {
        this._formData.append(key, value);
        return this;
    }

    public removeParam(key: string) {
        Sugar.Object.reject(this._params, key);
        return this;
    }

    public addRequestTransformer(transformer: RequestTransformerFunc) {
        Sugar.Array.append(this._requestTransformers, transformer);
        return this;
    }

    public removeRequestTransformer(transformer: RequestTransformerFunc) {
        Sugar.Array.remove(this._requestTransformers, transformer);
        return this;
    }

    public clearRequestTransformers() {
        Sugar.Array.removeAt(this._requestTransformers, 0, this._requestTransformers.length);
        return this;
    }

    public addResponseTransformer(transformer: ResponseTransformerFunc) {
        Sugar.Array.append(this._responseTransformers, transformer);
        return this;
    }

    public removeResponseTransformer(transformer: ResponseTransformerFunc) {
        Sugar.Array.remove(this._responseTransformers, transformer);
        return this;
    }

    public clearResponseTransformers() {
        Sugar.Array.removeAt(this._responseTransformers, 0, this._responseTransformers.length);
        return this;
    }

    public setOnUploadProgress(func: OnUploadProgressFunc) {
        this._onUploadProgress = func;
        return this;
    }

    public unsetOnUploadProgress() {
        this._onUploadProgress = undefined;
        return this;
    }

    public setOnDownloadProgress(func: OnDownloadProgressFunc) {
        this._onDownloadProgress = func;
        return this;
    }

    public unsetOnDownloadProgress() {
        this._onDownloadProgress = undefined;
        return this;
    }

    public execute<T>(): AxiosPromise<T> {
        var config: BaseRequestConfig = new BaseRequestConfig();
        config.url = this._url;
        config.method = this._method.toString();
        config.headers = this._headers;
        if (this._formData['_parts'].length !== 0) {
            config.data = this._formData
        }
        else {
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
        }
        config.transformRequest = this._requestTransformers;
        config.transformResponse = this._responseTransformers;
        config.onUploadProgress = this._onUploadProgress;
        config.onDownloadProgress = this._onDownloadProgress;
        config.cancelToken = this._cancelToken!.token;

        var request = RequestManager.shared.axios.request<T>(config);

        return request;
    }
}