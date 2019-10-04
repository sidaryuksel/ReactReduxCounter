import {actionTypes} from './actionTypes'

export const increase = () => ({type: actionTypes.COUNTER_INCREASE, payload: 1})
export const decrease = () => ({ type: actionTypes.COUNTER_DECREASE, payload: 1})
export const increaseByTen = () => ({type: actionTypes.COUNTER_INCREASE_BY_TEN, payload: 10})
export const decreaseByTen = () => ({type: actionTypes.COUNTER_DECREASE_BY_TEN, payload: 10})
