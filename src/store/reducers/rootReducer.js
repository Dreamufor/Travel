import authReducer from './authReducer';
import travelReducer from './travelReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    travel: travelReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;