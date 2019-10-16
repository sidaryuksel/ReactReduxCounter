import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    counterReducer,
    dataReducer
})

export default rootReducer;