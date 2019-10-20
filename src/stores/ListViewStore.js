import {action, computed, observable} from "mobx";

class ListViewStore {
    @observable  _isLoadMoreActivityIndicatorVisible = false;
    @observable  _isPullToRefreshIndicatorVisible = false;
    @observable  _isEmptyListComponentVisible = false;


    @computed
     get getLoadMoreActivityIndicatorStatues() {
        return this._isLoadMoreActivityIndicatorVisible
    }

    @action  showLoadMoreActivityIndicator = () => {
        this._isLoadMoreActivityIndicatorVisible = true;
    };

    @action  hideLoadMoreActivityIndicator = () => {
        this._isLoadMoreActivityIndicatorVisible = false;
    };

    @computed
     get getPullToRefreshIndicatorStatues() {
        return this._isPullToRefreshIndicatorVisible
    }

    @action  showPullToRefreshIndicator = () => {
        this._isPullToRefreshIndicatorVisible = true;
    };

    @action  hidePullToRefreshIndicator = () => {
        this._isPullToRefreshIndicatorVisible = false;
    };

    @computed
     get getEmptyListComponentStatues() {
        return this._isEmptyListComponentVisible
    }

    @action  showEmptyListComponent = () => {
        this._isEmptyListComponentVisible = true;
    };

    @action  hideEmptyListComponent = () => {
        this._isEmptyListComponentVisible = false;
    }


}
export default  ListViewStore