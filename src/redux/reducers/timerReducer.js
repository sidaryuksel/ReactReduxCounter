import { actionTypes } from '../actions/actionTypes';

const timerReducer = (state = 0, action) => {
    let newState = state;
    switch (action.type) {
        case actionTypes.START_TIMER_UP:
                console.log("caseup");
            return newState = state + action.payload;
        case actionTypes.START_TIMER_DOWN:
            console.log("casedown");
            return newState = state - action.payload;
        case actionTypes.START_TIMER_STOP:
            console.log("stop");
            return newState;
        default:
            return newState;
    }
}

export default timerReducer;