import * as api from '../utils/api.util';

export async function getData() {
  try {
    return  await api.everything('?q=bitcoin&apiKey=dc830d6269724101b49cab527d2329bf')
  }catch (e) {
    throw e
  }
}
