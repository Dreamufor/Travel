import authReducer from './authReducer';
import travelReducer from './travelReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    travel: travelReducer,
    firestore: firestoreReducer
});

export default rootReducer;