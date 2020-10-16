import { MOVIES_LOADED } from './actions';
import { createStore } from 'redux';

export const moviesReducer = (state = {}, action) => {
    const  { type, payload } = action;

    switch (type) {
        case MOVIES_LOADED: {
            return {
                ...state,
                movies: payload
            };
        }
        default:{
            return state;
        }
    }
}