import { combineReducers } from 'redux';

import auth from './auth';
import common from './common';
import productCategories from './productCategories';
import products from './products';
import orders from './orders';
import colors from './colors';
import sizes from './sizes';
import carts from './carts';

const rootReducer = combineReducers({
    auth,
    common,
    productCategories,
    products,
    orders,
    colors,
    sizes,
    carts,
})

export default rootReducer;
