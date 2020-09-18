import { Dimensions, Platform, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';
// import VersionNumber from 'react-native-version-number';

const { width: viewportWidth, height: viewportHeight, scale } = Dimensions.get('window');

const HEADER_MAX_HEIGHT = (viewportWidth * 9) / 16;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 64 : 56;
const PLATFORM = Platform.OS;

const getViewWidth = (percentage) => {
  const value = percentage * viewportWidth;
  return Math.round(value);
};

const getViewHeight = (percentage) => {
  const value = percentage * viewportHeight;
  return Math.round(value);
};

function isIphoneX() {
  const X_WIDTH = 375;
  const X_HEIGHT = 812;

  const XSMAX_WIDTH = 414;
  const XSMAX_HEIGHT = 896;

  const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

  let isIPhoneX = false;

  if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    isIPhoneX = (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT)
      || (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT);
  }
  return isIPhoneX;
}

function getStatusBarHeight(skipAndroid = false) {
  return Platform.select({
    ios: isIphoneX() ? 44 : 20,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  });
}

const headerOffset = PLATFORM === 'ios' ? 70 : 70 - getStatusBarHeight();


const deviceInfo = {
  brand: DeviceInfo.getBrand,
  device_id: DeviceInfo.getUniqueId,
  model: DeviceInfo.getModel,
  os_version: DeviceInfo.getSystemVersion,
  app_version: DeviceInfo.getVersion,
  getReadableVersion: DeviceInfo.getReadableVersion,
  name: Platform.OS,
  os: Platform.OS,
};

module.exports = {
  getViewWidth,
  getViewHeight,
  viewportWidth,
  viewportHeight,
  scale,
  getPlatform: PLATFORM,
  deviceInfo,
  currentPlatform: Platform.OS,
  // currentAppVersion: VersionNumber.appVersion,
  getHeaderMinHeight: HEADER_MIN_HEIGHT,
  getHeaderMaxHeight: HEADER_MAX_HEIGHT,
  getHeaderScrollDistance: HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
  getStatusBarHeight,
  headerOffset,
  isIphoneX,
};
