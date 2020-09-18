import { StyleSheet } from 'react-native';
import { FONT_SIZE_NORMAL, FONT_WEIGHT_BOLD } from '../../../styles/common.style';
import { theme } from '../../../styles/core.style';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: theme.PADDING_MEDIUM,
    paddingVertical: theme.PADDING_SMALL,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: theme.PRIMARY,
  },

  text: {
    ...FONT_SIZE_NORMAL,
    ...FONT_WEIGHT_BOLD,
    color: theme.PRIMARY,
    marginLeft: theme.PADDING_SMALL,
  },

  icon: {
    marginLeft: theme.PADDING_SMALL,
  },
  iconCheck: {
    marginLeft: 'auto',
    marginTop: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
  },
});
