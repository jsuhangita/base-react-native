import * as api from '../utils/api.util';
import { deviceInfo } from '../utils/device.util';
import { APP_CONFIG_DEFAULT } from '../variables/common.variable';
import { get, set, storageKeys } from '../utils/storage.util';


export async function initialSetup() {
  const initialSetup = await get(storageKeys.INITIAL_SETUP);
  if (!initialSetup) {
    set(storageKeys.INITIAL_SETUP, true);
    set(storageKeys.APP_CONFIG, APP_CONFIG_DEFAULT);
  }
  return get(storageKeys.APP_CONFIG);
}
