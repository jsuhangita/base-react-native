import { StyleSheet } from 'react-native';
import { theme } from '../../styles/core.style';
import { FONT_SIZE_NORMAL, FONT_SIZE_SMALL } from '../../styles/common.style';

export default StyleSheet.create({
  classContainer: {
    margin: theme.PADDING,
    borderRadius: 20,
    padding: theme.PADDING,
    backgroundColor: theme.FADE_GREY,
    marginTop: theme.PADDING_LARGE * 3,
    marginBottom: 'auto',
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
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  abortButton: {
    backgroundColor: theme.WHITE,
    borderColor: theme.RED,
    borderWidth: 1,
  },
  abortText: {
    color: theme.red,
  },
});
