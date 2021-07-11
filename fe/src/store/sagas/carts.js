import { put } from "redux-saga/effects";
import { toast } from 'react-toastify';

import {
    getCartsSuccess,
    getCartsError,
    toggleLoading,
} from '../../actions';

export function* getCartsSaga(action) {
    try {
        let result = [];
        
        try {
            result = JSON.parse(window.localStorage.getItem('carts'));
        } catch (error) {
        }

        yield put(getCartsSuccess(result));
    } catch (error) {
        toast.error(error.response && error.response.data && error.response.data.message ? error.response.data.message : 'Đã có lỗi xảy ra, vui lòng thử lại sau!');
        yield put(getCartsError());
    }
}

export function* updateCartsSaga(action) {
    try {
        window.localStorage.setItem('carts', JSON.stringify(action.carts))
        if (action.cb) {
            action.cb();
        }
    } catch (error) {
        toast.error(error.response && error.response.data && error.response.data.message ? error.response.data.message : 'Đã có lỗi xảy ra, vui lòng thử lại sau!');
    }
}
