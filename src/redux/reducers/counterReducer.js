import {actionTypes} from '../actions/actionTypes';

const counterReducer = (state = 5, action) => {
    let newState=state;
    switch (action.type) {
        case actionTypes.COUNTER_INCREASE:
            return ( newState = state + action.payload );
        case actionTypes.COUNTER_DECREASE:
            return ( newState = state - action.payload );
        case actionTypes.COUNTER_INCREASE_BY_TEN:
            return ( newState = state + action.payload );
        case actionTypes.COUNTER_DECREASE_BY_TEN:
            return ( newState = state - action.payload );
        default:
            return newState;
    }
};

export default counterReducer;