import { StyleSheet } from 'react-native';
import { theme } from '../../styles/core.style';
import { FONT_SIZE_NORMAL, FONT_SIZE_SMALL } from '../../styles/common.style';

export default StyleSheet.create({
  classContainer: {
    margin: theme.PADDING,
    borderRadius: 20,
    padding: theme.PADDING,
    backgroundColor: theme.FADE_GREY,
  },
  className: {
    ...FONT_SIZE_NORMAL,
    marginBottom: theme.PADDING_SMALL,
  },
  time: {
    ...FONT_SIZE_SMALL,
    marginBottom: theme.PADDING_SMALL,
  },
  desc: {
    marginBottom: theme.PADDING,
  },
});
