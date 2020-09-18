import { enableScreens } from 'react-native-screens';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import TestScreen from "../views/TestScreen";
import LoadingScreen from '../views/LoadingScreen.page';

enableScreens();

const AppNavigator = createSwitchNavigator({
  LoadingScreen,
  App:TestScreen,
}, {
  initialRouteName: 'LoadingScreen',
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
