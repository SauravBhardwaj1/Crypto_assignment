import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './reducer';

const rootReducer=combineReducers({
   authReducer
});

const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;