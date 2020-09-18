import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/core.style';
import { viewportWidth } from '../../../utils/device.util';
import {
  FONT_SIZE_SMALL, FONT_WEIGHT_BOLD,
} from '../../../styles/common.style';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.inputBackground,
    width: viewportWidth,
    height: 50,
    paddingHorizontal: 20,
  },
  header__left: {
    flexDirection: 'row',
  },
  header__leftIcon: {
    color: theme.buttonPickerColor,
    marginRight: 20,
  },
  header__rightIcon: {
    color: theme.buttonPickerColor,
    marginLeft: 20,
  },
  header__rightButton: {
    ...FONT_SIZE_SMALL,
    ...FONT_WEIGHT_BOLD,
    color: theme.buttonPickerColor,
  },
  picker: {
    width: viewportWidth,
  },
  pickerView__background: {
    backgroundColor: theme.white,
  },
});
