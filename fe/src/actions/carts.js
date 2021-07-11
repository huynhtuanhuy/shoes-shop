import {
    GET_CARTS,
    GET_CARTS_ERROR,
    GET_CARTS_SUCCESS,
    UPDATE_CARTS,
} from './actionTypes';

export const getCarts = (params) => ({
    type: GET_CARTS,
    params
})

export const getCartsSuccess = (carts) => ({
    type: GET_CARTS_SUCCESS,
    carts
})

export const getCartsError = () => ({
    type: GET_CARTS_ERROR
})

export const updateCarts = (carts, cb) => ({
    type: UPDATE_CARTS,
    carts,
    cb,
})