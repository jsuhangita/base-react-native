import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../../styles/core.style';
import {
  FONT_SIZE_MEDIUM, FONT_SIZE_NORMAL, FONT_WEIGHT_BOLD,
} from '../../../styles/common.style';

export default StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 14,
    shadowColor: theme.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    elevation: 3,
    height: (Platform.OS === 'ios' ? 44 : 56),
    backgroundColor: theme.PRIMARY,
  },
  centerComponent: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%',
    textAlign: 'center',
  },
  title: {
    ...FONT_SIZE_MEDIUM,
    ...FONT_WEIGHT_BOLD,
  },
  iconContainer: {
    flex: 2,
  },
  iconLeftContainer: {
    flex: 2,
    height: '100%',
    justifyContent: 'center',
  },
  iconRightContainer: {
    flex: 2,
    height: '100%',
    justifyContent: 'center',
  },
  icon: {
    color: theme.BLACK,
  },
  rightText: {
    ...FONT_SIZE_NORMAL,
    ...FONT_WEIGHT_BOLD,
  },
});
