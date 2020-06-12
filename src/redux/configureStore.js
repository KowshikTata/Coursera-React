import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk'; //thunk-middleware
import logger from 'redux-logger';//logging
export const ConfigureStore = () => {
    //combined reducer using combineReducers
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)//enhancer
    );

    return store;
}