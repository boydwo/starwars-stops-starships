import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Reducers } from '../reducers';

const Store = createStore(Reducers, compose(applyMiddleware(thunkMiddleware)));
export default Store;
