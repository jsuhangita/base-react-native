import { theme } from '../../../styles/core.style';
import { viewportWidth } from '../../../utils/device.util';
import { fontWeightBold, fontSizeMedium } from '../../../styles/common.style';

export default {
  datePicker__container: {
    width: viewportWidth,
    backgroundColor: theme.inputBackground,
  },

  datePicker__header: {
    width: viewportWidth,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

  datePicker__button: {
    ...fontSizeMedium,
    ...fontWeightBold,
    color: theme.buttonPickerColor,
  },

  datePicker__list: {
    width: viewportWidth,
    backgroundColor: theme.white,
  },
};
