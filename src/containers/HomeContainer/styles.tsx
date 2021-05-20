import { StyleSheet } from 'react-native';
import globalStyles from '../../utils/globalStyles';

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius:20,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  byLineContainer: {
    backgroundColor: globalStyles.COLORS.DARK_BLUE,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
  },
  byline: {
    color: globalStyles.COLORS.WHITE,
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  modalCloseButton: {
    backgroundColor: globalStyles.COLORS.BLACK,
    width: '100%',
    height: 70,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingBottom: 5,
  },
});

export { styles };
