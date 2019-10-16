import { actionTypes } from '../actions/actionTypes';

const dataReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_JSON_DATA:
            return action.data;

        default:
            return state;
    }
}


export default dataReducer;