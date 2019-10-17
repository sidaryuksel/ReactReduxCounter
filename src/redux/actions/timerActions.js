import {actionTypes} from './actionTypes';

export const startTimerUp = () => ({type: actionTypes.START_TIMER_UP, payload: 1});
export const startTimerDown = () =>  ({type: actionTypes.START_TIMER_DOWN, payload:1});
export const startTimerStop = () =>  ({type: actionTypes.START_TIMER_STOP});