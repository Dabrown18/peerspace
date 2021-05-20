import {PicSumTypes} from '../actions/types';
import {PicSumState} from '../../utils/interfaces';
import {PicSumAction} from '../actions/interfaces';

const initialState: PicSumState = {
  data: [],
};

const {
  GetImages,
} = PicSumTypes;

export default function picSumReducer(
  state: PicSumState = initialState,
  action: PicSumAction
): PicSumState {
  switch (action.type) {
    case GetImages:
      return Object.assign({}, state, {
        data: action.data,
      });
    default:
      return state;
  }
}


