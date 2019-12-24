import { combineReducers } from 'redux';
import LoginReducer from './Redux/Login/reducer';

export default combineReducers({
    login: LoginReducer
});

