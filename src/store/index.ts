import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { saga } from './saga';
import { reducers } from './reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers,
  applyMiddleware(sagaMiddleware),
);

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(saga);

