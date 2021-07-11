import { takeEvery } from 'redux-saga/effects';
import {
    SIGN_IN,
    SIGN_OUT,
    GET_USER_INFO,
    UPDATE_PASSWORD,
    UPDATE_PROFILE,
    GET_PRODUCT_CATEGORIES,
    GET_PRODUCTS,
    GET_TOP_FEATURED_PRODUCTS,
    GET_TOP_NEW_PRODUCTS,
    GET_TOP_VIEW_PRODUCTS,
    GET_COLORS,
    GET_SIZES,
    GET_CARTS,
    UPDATE_CARTS,
    GET_ORDERS,
} from '../../actions/actionTypes';

import {
    getInfoUserSaga,
    signInSaga,
    signOutSaga,
    updatePasswordSaga,
    updateProfileSaga,
} from './auth';

import {
    getProductCategoriesSaga,
} from './productCategories';

import {
    getProductsSaga,
    getTopFeaturedProductsSaga,
    getTopNewProductsSaga,
    getTopViewProductsSaga,
} from './products';

import {
    getSizesSaga,
} from './sizes';

import {
    getColorsSaga,
} from './colors';

import {
    getCartsSaga,
    updateCartsSaga,
} from './carts';

import { getOrdersSaga } from './orders';

export function* watchAuth() {
    yield takeEvery(SIGN_IN, signInSaga);
    yield takeEvery(SIGN_OUT, signOutSaga);
    yield takeEvery(GET_USER_INFO, getInfoUserSaga);
    yield takeEvery(UPDATE_PASSWORD, updatePasswordSaga);
    yield takeEvery(UPDATE_PROFILE, updateProfileSaga);
}

export function* watchProductCategories() {
    yield takeEvery(GET_PRODUCT_CATEGORIES, getProductCategoriesSaga);
}

export function* watchProducts() {
    yield takeEvery(GET_PRODUCTS, getProductsSaga);
    yield takeEvery(GET_TOP_FEATURED_PRODUCTS, getTopFeaturedProductsSaga);
    yield takeEvery(GET_TOP_NEW_PRODUCTS, getTopNewProductsSaga);
    yield takeEvery(GET_TOP_VIEW_PRODUCTS, getTopViewProductsSaga);
}

export function* watchColors() {
    yield takeEvery(GET_COLORS, getColorsSaga);
}

export function* watchSizes() {
    yield takeEvery(GET_SIZES, getSizesSaga);
}

export function* watchCarts() {
    yield takeEvery(GET_CARTS, getCartsSaga);
    yield takeEvery(UPDATE_CARTS, updateCartsSaga);
}

export function* watchOrders() {
    yield takeEvery(GET_ORDERS, getOrdersSaga);
}