import { PicSumTypes } from './types';
import {GetImages} from './interfaces';
import {PicSumImages} from '../../utils/interfaces';

export function getPicSumImages(data: PicSumImages): GetImages {
  return {
    type: PicSumTypes.GetImages,
    data,
  };
}

