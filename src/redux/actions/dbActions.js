import { actionTypes } from './actionTypes';

export const requestJsonData = () => ({ type: actionTypes.REQUEST_JSON_DATA });
export const receiveJsonData = data => ({ type: actionTypes.RECEIVE_JSON_DATA, data });
