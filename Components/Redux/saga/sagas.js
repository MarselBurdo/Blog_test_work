import { put, takeEvery, all, call } from "redux-saga/effects";
import { showUsers } from "../action";
import { WATCH_USER } from "../types";

const requestOnServer = async ()=>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await response.json()
    return users
}

function* sagaUsers (){
  const data = yield call(requestOnServer)
  yield put(showUsers(data))
}

function* actionWatcher(){
  yield takeEvery(WATCH_USER, sagaUsers)
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
