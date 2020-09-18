import { noop } from 'lodash';
import { Alert } from './RNHelpers.util';
import { language } from '../languages';

export const alert = (title = '', message = '') => (
  Alert.alert(title,
    message,
    [{
      text: language.COMMON__OK,
    }])
);

// export function errorHandler(props) {
//   const {
//     isShowAlert = true,
//     title, message = language.COMMON__TRT_AGAIN,
//   } = props;
//   if (isShowAlert) {
//     Alert.alert(title,
//       message,
//       [{
//         text: language.COMMON__OK,
//       }]);
//   }
// }

export function alertConfirmation(props) {
  const {
    title = '',
    message = '',
    onPress = noop,
  } = props;
  Alert.alert(title, message,
    [
      { text: language.COMMON__CANCEL },
      {
        text: language.COMMON__OK,
        onPress,
      },
    ]);
}
