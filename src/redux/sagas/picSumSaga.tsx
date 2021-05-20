import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import apiHelper from '../../utils/apiHelper';
import {getPicSumImages} from '../actions/action';
import {PicSumTypes} from '../actions/types';

function* loadPicSumImages(){
  try {
    const response = yield axios.get(apiHelper.getUsersApi());
    const data = yield response.data;
    yield put(getPicSumImages(data));
  } catch (e) {
    console.log('FAILED API CALL');
  }
}

function* picSumSaga() {
  yield takeEvery(PicSumTypes.GetImages, loadPicSumImages);
}

export default picSumSaga;
