import {Action} from 'redux';
import {PicSumTypes} from './types';
import {PicSumImages} from '../../utils/interfaces';

export type PicSumAction =
  | GetImages;

export interface GetImages extends Action {
  type: PicSumTypes.GetImages;
  data: PicSumImages
}
