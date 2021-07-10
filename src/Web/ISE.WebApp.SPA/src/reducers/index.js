import { combineReducers } from 'redux';
import { registerReducer } from 'store/register/register-duck';

const rootReducer = combineReducers({ registerReducer });

export default rootReducer;
