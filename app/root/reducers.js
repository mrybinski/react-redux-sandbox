import { combineReducers } from 'redux';
import homeReducer from '../Home/homeReducer';

const rootReducer = combineReducers({
    home: homeReducer
});

export default rootReducer;
