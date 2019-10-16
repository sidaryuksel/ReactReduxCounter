import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./index";
import mySaga from './saga';

// create the saga middleware
const sagaMiddleWare = createSagaMiddleware();

// mount it on the Store
const store = createStore(
    rootReducer, 
    applyMiddleware(sagaMiddleWare)
    );


sagaMiddleWare.run(mySaga);

export default store;