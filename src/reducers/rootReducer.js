/*

import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';

export default combineReducers({
 simpleReducer
});
*/

const initState = {
    data: [
        {dummy: 'data1', title: 'Hello1'},
        {dummy: 'data2', title: 'Hello2'},
        {dummy: 'data3', title: 'Hello3'}
    ]
}

const rootReducer = (state = initState, action ) => {
    return state;
}

export default rootReducer;