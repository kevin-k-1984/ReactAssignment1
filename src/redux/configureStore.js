import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form'
import { Dishes } from "./ReducerDishes";
import { Comments } from "./ReducerComments";
import { Leaders } from "./ReducerLeaders";
import { Promotions } from "./ReducerPromotions";
import { Feedback } from './ReducerFeedback';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './Forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            feedback: Feedback,
            ...createForms({
                feedback : InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}