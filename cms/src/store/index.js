import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import { watchAuth, watchProductCategories, watchUsers, watchProducts, watchProductDetailSales, watchOrders } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchProductCategories);
sagaMiddleware.run(watchUsers);
sagaMiddleware.run(watchProducts);
sagaMiddleware.run(watchProductDetailSales);
sagaMiddleware.run(watchOrders);

export default store;
