import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import dataReducer from './dataReducer';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
    counterReducer,
    dataReducer,
    timerReducer
})

export default rootReducer;