
import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const DARK_BLUE = '#191970';
const WHITE = '#FFFFFF';
const BLACK = '#000000';

const globalStyles = {
  DEVICE_TYPE: Platform.OS === 'ios',
  SCREEN_SIZE: {
    height,
    width,
  },
  COLORS: {
    DARK_BLUE,
    WHITE,
    BLACK,
  },
};

export default globalStyles;
