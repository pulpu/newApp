import { combineReducers } from 'redux';
import reducer from './reducer';
import authReducers from './auth-reducers';
export default combineReducers({
    reducer: reducer ,
    authReducers: authReducers
});