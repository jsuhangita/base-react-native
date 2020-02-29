import { Platform } from 'react-native';
import { theme, textStyles } from './core.style';
import { RFValue } from '../utils/helper.util';

export const fullScreenAbsolute = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
};

export const BOTTOM_SHADOW = {
  shadowColor: theme.BLACK,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

export const BOTTOM_SHADOW_LIGHT = {
  shadowColor: theme.BLACK,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.84,
  elevation: 2,
};

export const flex1 = { flex: 1 };

export const flexGrow1 = { flexGrow: 1 };

export const flexRow = { flexDirection: 'row' };

export const spaceBetween = { justifyContent: 'space-between' };

export const fontSizeSmall = { ...textStyles.textSM };
export const FONT_SIZE_SMALL = { ...textStyles.textSM };

export const fontSizeExtraSmall = { ...textStyles.textXS };
export const FONT_SIZE_EXTRA_SMALL = { ...textStyles.textXS };

export const fontSizeLarge = { ...textStyles.textLG };
export const FONT_SIZE_LARGE = { ...textStyles.textLG };

export const fontSizeMedium = { ...textStyles.textMD };
export const FONT_SIZE_MEDIUM = { ...textStyles.textMD };

export const fontSizeNormal = { ...textStyles.text };
export const FONT_SIZE_NORMAL = { ...textStyles.text };

export const fontWeightBold = {
  fontWeight: theme.FONT_WEIGHT_BOLD,
};

export const FONT_WEIGHT_BOLD = {
  fontWeight: theme.FONT_WEIGHT_BOLD,
  ...Platform.select({
    ios: {
      fontFamily: 'Arial',
    },
    android: {
      fontFamily: 'sans-serif',
    },
  }),
};

export const FONT_WEIGHT_EXTRA_BOLD = {
  fontWeight: theme.FONT_WEIGHT_EXTRA_BOLD,
  ...Platform.select({
    ios: {
      fontFamily: 'Arial',
    },
    android: {
      fontFamily: 'sans-serif',
    },
  }),
};

export const paddingHorizontal = {
  paddingHorizontal: theme.padding,
};

export const paddingVertical = {
  paddingVertical: theme.padding,
};

export const rowLeft = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

export const rowSpaceBetween = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const rowCenter = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const containerRowSpaceBetween = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const ICON_WRAPPER = {
  width: 35,
  height: 35,
  borderRadius: 20,
  backgroundColor: theme.WHITE,
  shadowColor: theme.BLACK,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 2,
  alignItems: 'center',
  justifyContent: 'center',
};

export const ICON_WRAPPER_PROFILE = {
  width: RFValue(37),
  height: RFValue(37),
  borderRadius: RFValue(17.5),
  backgroundColor: theme.WHITE,
  shadowColor: theme.BLACK,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 2,
  alignItems: 'center',
  justifyContent: 'center',
};

export const SHADOW_BORDER = {
  borderColor: theme.FADE_BORDER,
  shadowColor: theme.BLACK,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 2,
};
