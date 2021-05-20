import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from "./ReducerDishes";
import { Comments } from "./ReducerComments";
import { Leaders } from "./ReducerLeaders";
import { Promotions } from "./ReducerPromotions";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}