import { enableScreens } from 'react-native-screens';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import TestScreen from "../views/TestScreen";

enableScreens();

const AppNavigator = createSwitchNavigator({
  App:TestScreen,
}, {
  initialRouteName: 'App',
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
