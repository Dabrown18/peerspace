import { all } from 'redux-saga/effects';
import picSumSaga from './picSumSaga';

export default function* rootSaga() {
  yield all([
    picSumSaga(),
  ]);
}
