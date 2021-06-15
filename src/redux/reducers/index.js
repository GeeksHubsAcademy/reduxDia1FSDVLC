import {combineReducers} from 'redux';
import characters from './characters-reducer';
import credentials from './credentials-reducer';

const rootReducer = combineReducers({
    characters,
    credentials
});

export default rootReducer;