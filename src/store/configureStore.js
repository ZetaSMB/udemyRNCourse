import { createStore, combineReducers, compose } from 'redux';

import theReducer from './reducers/places';

let composeEnhancer = compose
if (__DEV__) {
    composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const rootReducer = combineReducers({
    places: theReducer
});

const configureStore = () => {
    return createStore(rootReducer, composeEnhancer());
};

export default configureStore;