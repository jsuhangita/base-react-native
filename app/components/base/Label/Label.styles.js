import { StyleSheet } from 'react-native';
import { FONT_SIZE_SMALL } from '../../../styles/common.style';
import { theme } from '../../../styles/core.style';

export default StyleSheet.create({
  label__container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  label__text: {
    ...FONT_SIZE_SMALL,
  },
  label__iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  label__iconWhite: {
    color: theme.white,
  },
  label__textContainer: {},
});
