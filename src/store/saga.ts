import { fork } from 'redux-saga/effects';
import { homeSaga } from './home/saga';

export function* saga() {
  yield fork(homeSaga);
}
