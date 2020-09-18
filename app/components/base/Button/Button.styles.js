import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/core.style';
import { flex1, FONT_SIZE_MEDIUM, FONT_WEIGHT_BOLD } from '../../../styles/common.style';

export default StyleSheet.create({
  button__center: {
    alignItems: 'center',
  },
  button__bottomCenter: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: theme.PADDING,
  },
  button__bottomRight: {
    position: 'absolute',
    bottom: theme.PADDING,
    right: theme.PADDING,
  },
  button__container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY,
    borderRadius: 5,
    paddingHorizontal: 15,
    height: 42,
  },
  button__round: {
    borderRadius: 50,
  },
  button__transparentContainer: {
    backgroundColor: theme.TRANSPARENT,
    borderColor: theme.TRANSPARENT,
    borderRadius: 0,
  },
  button__boldText: {
    ...FONT_WEIGHT_BOLD,
  },
  button__transparentText: {
    color: theme.PRIMARY,
  },
  button__whiteText: {
    color: theme.WHITE,
  },
  button__left_text: {
    ...flex1,
    textAlign: 'left',
  },
  button__outlineContainer: {
    backgroundColor: theme.SEMI_LIGHT_BLACK,
    borderWidth: 1,
    borderColor: theme.PRIMARY,
    borderRadius: 5,
  },
  button__outlineText: {
    ...FONT_SIZE_MEDIUM,
    color: theme.PRIMARY,
  },
  button__textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button__text: {
    ...FONT_SIZE_MEDIUM,
    color: theme.BLACK,
  },

  icon: {
    marginLeft: theme.PADDING_SMALL,
  },

  iconReverse: {
    marginRight: theme.PADDING_SMALL,
  },

  button__left: {
    alignItems: 'flex-start',
  },
  button__right: {
    alignItems: 'flex-end',
  },
  button__disabled: {
    backgroundColor: theme.DISABLED_GRREY,
  },
  button__outline_disabled: {
    backgroundColor: theme.GREY,
    borderColor: theme.DISABLED_GRREY,
  },
  button__disabledText: {
    color: theme.DISABLED_GRREY,
  },
  small: {
    height: 38,
  },
  smallText: {
    fontSize: theme.FONT_SIZE_SMALL,
  },
});
