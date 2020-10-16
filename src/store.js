import { createStore, combineReducers } from 'redux';
import { moviesReducer } from './redux/reducers';

const reducers = { moviesReducer };

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);