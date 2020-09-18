import {
  flex1, FONT_SIZE_NORMAL,
  fontSizeMedium, rowLeft,
} from '../../../styles/common.style';
import { theme } from '../../../styles/core.style';

export default {
  picker__wrapper: {
    marginBottom: theme.padding,
  },
  picker__no_margin: {
    marginBottom: 0,
  },
  picker__container: {
    backgroundColor: theme.transparent,
    borderWidth: 1,
    borderColor: theme.PRIMARY,
  },
  picker__round: {
    paddingHorizontal: theme.padding,
    borderRadius: 50,
  },
  input__label: {
    ...fontSizeMedium,
  },
  picker__content: {
    ...rowLeft,
  },
  picker__affixContainer: {
    ...flex1,
  },

  picker__suffixContainer: {
    flex: 2,
  },
  picker__suffix: {
    textAlign: 'right',
  },
  picker__textContainer: {
    flex: 8,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  picker__text: {
    ...fontSizeMedium,
    color: theme.PRIMARY,
  },

  picker__text_white: {
    color: theme.white,
  },

  picker__border_white: {
    borderBottomColor: theme.white,
  },
  labelStyle: {
    ...FONT_SIZE_NORMAL,
    color: theme.PRIMARY,
    marginBottom: theme.PADDING_SMALL,
  },

  picker__disabled: {},
};
