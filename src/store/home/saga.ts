import { Action } from 'redux-actions';
import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { fetch_hello } from 'src/api/home';
import { get_hello, INSERTCOUNT, insert_count } from './reducer';
import { IPayload } from './type';
export function* homeSaga() {
  yield fork(watchCount);
  yield takeLatest(get_hello.request.type, watchHello);
}

function* watchCount(): any {
  while (true) {
    yield take(INSERTCOUNT);
    // const count = yield select();
    yield put(insert_count({ count: 2 }));
  }
}

function* watchHello(action: Action<Partial<IPayload>>): any{
  const res = yield call(fetch_hello, action.payload);
  yield put(get_hello.success.action({ message: res.data }));
}
