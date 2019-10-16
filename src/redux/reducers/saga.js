import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchUsers } from './api';
import { receiveJsonData } from '../actions/dbActions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUsersData(action) {
    try {
        //do db.json call
        const users = yield call(fetchUsers);
        yield put(receiveJsonData(users));
    } catch (e) {
        console.log(e);
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    yield takeLatest("REQUEST_JSON_DATA", fetchUsersData);
}

export default mySaga;