import { axios } from './index.js';

const ORDERS_URL = '/fe/orders'

export function getOrders (params) {
    return axios.get(
        `${ORDERS_URL}`,
        {
            params: params || {}
        },
    );
}

export function makeOrders (order) {
    return axios.post(
        `${ORDERS_URL}`,
        order,
    );
}
