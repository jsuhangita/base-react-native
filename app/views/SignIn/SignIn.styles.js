import { StyleSheet } from 'react-native';
import {
  viewportWidth, viewportHeight,
} from '../../utils/device.util';
import {
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL, FONT_WEIGHT_BOLD,
} from '../../styles/common.style';
import { theme } from '../../styles/core.style';

export default StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: theme.PADDING_LARGE,
  },

  logo: {
    width: (viewportHeight > 480 ? 0.35 : 0.25) * viewportWidth,
    height: (viewportHeight > 480 ? 0.393 : 0.28) * viewportWidth,
  },

  formContainer: {
    paddingHorizontal: theme.PADDING_LARGE,
  },

  lineContainer: {
    marginTop: theme.PADDING_LARGE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoLine: {
    height: 0.5,
    backgroundColor: theme.WHITE,
    flex: 1,
    marginVertical: theme.PADDING,
  },

  infoText: {
    ...FONT_SIZE_SMALL,
    color: theme.WHITE,
  },

  footer: {
    padding: theme.PADDING_LARGE,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.PADDING_LARGE * 1.5,
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.PADDING,
  },

  footerIcon: {
    width: 50,
  },

  infoSignUp: {
    ...FONT_SIZE_MEDIUM,
    ...FONT_WEIGHT_BOLD,
    color: theme.PRIMARY,
  },
});
