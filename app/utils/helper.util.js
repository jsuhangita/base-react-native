import { PermissionsAndroid } from 'react-native';
import { isEmpty, noop } from 'lodash';
import Geolocation from '@react-native-community/geolocation';
import { getPlatform, viewportHeight } from './device.util';
import { DEFAULT_LOCATION } from '../variables/common.variable';


export function RFValue(fontSize, standardScreenHeight = 685) {
  const heightPercent = (fontSize * viewportHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export async function getDeviceLocation(onSuccess = noop, onError = noop) {
  const defaultLocation = DEFAULT_LOCATION;

  function successGetLocation({ coords }) {
    onSuccess(coords);
  }

  function failedGetLocation(err) {
    onError(defaultLocation, err);
  }

  if (getPlatform === 'android') {
    const granted = (
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      await Geolocation.getCurrentPosition(successGetLocation, failedGetLocation,
        { timeout: 1500 });
    } else {
      // failed
    }
  } else {
    await Geolocation.requestAuthorization();
    await Geolocation.getCurrentPosition(successGetLocation, failedGetLocation,
      { timeout: 1500 });
  }
}
