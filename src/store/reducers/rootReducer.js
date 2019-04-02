import authReducer from './authReducer';
import travelReducer from './travelReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    travel: travelReducer
});

export default rootReducer;