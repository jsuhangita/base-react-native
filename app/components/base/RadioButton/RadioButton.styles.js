import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/core.style';
import { flex1, FONT_SIZE_NORMAL } from '../../../styles/common.style';

export default StyleSheet.create({
  wrapper: {
    marginBottom: theme.paddingLarge,
  },
  radioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: theme.PRIMARY,
  },

  no_margin: {
    marginBottom: 0,
  },
  container: {
    backgroundColor: theme.transparent,
    paddingLeft: theme.PADDING_SMALL,
  },

  outline: {
    backgroundColor: theme.TRANSPARENT,
    borderWidth: 1,
    borderColor: theme.FADE_BORDER,
    borderRadius: theme.BORDER_RADIUS,
  },

  round: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: theme.padding,
    borderBottomWidth: 0,
    borderRadius: 50,
  },

  label: {
    ...FONT_SIZE_NORMAL,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  affixContainer: {
    ...flex1,
  },

  suffixContainer: {
    flex: 2,
    alignItems: 'flex-end',
    paddingRight: theme.PADDING,
  },

  suffix: {
    textAlign: 'right',
  },

  iconSuffix: {
    alignItems: 'flex-end',
  },

  textContainer: {
    flex: 8,
    height: 44,
    justifyContent: 'center',
  },

  text: {
    ...FONT_SIZE_NORMAL,
    height: 44,
    color: theme.black,
  },

  small: {
    height: 32,
  },

  text_white: {
    color: theme.white,
  },

  border_white: {
    borderBottomColor: theme.white,
  },

  transparent: {
    borderBottomWidth: 0,
  },
});
