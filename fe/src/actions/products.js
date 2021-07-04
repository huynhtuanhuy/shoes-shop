import {
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS,
} from './actionTypes';

export const getProducts = (params) => ({
    type: GET_PRODUCTS,
    params
})

export const getProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    products
})

export const getProductsError = () => ({
    type: GET_PRODUCTS_ERROR
})