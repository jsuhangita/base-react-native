import { StyleSheet } from 'react-native';
import { theme } from '../../styles/core.style';
import { FONT_SIZE_LARGE, FONT_SIZE_NORMAL } from '../../styles/common.style';

export default StyleSheet.create({
  checkIcon: {
    fontSize: 200,
    color: theme.WHITE,
  },
  iconContainer: {
    backgroundColor: theme.PRIMARY,
    borderRadius: 100,
    marginTop: theme.PADDING * 6,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.PADDING,
  },
  textContainer: {
    alignItems: 'center',
  },
  thankYouText: {
    ...FONT_SIZE_LARGE,
    textAlign: 'center',
    marginBottom: theme.PADDING,
  },
  infoText: {
    ...FONT_SIZE_NORMAL,
    marginBottom: theme.PADDING_LARGE,
  },
  okText: {
    ...FONT_SIZE_NORMAL,
    color: theme.PRIMARY,
  },
});
