import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../views/SignIn/SignIn.view';
import BookingList from '../views/BookingList/BookingList.view';
import CheckOut from '../views/CheckOut/CheckOut.view';
import ThankYou from '../views/ThankYou/ThankYou.view';

const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
      >
        <Stack.Screen name="SignInScreen" component={SignIn} />
        <Stack.Screen name="BookingScreen" component={BookingList} />
        <Stack.Screen name="CheckOutScreen" component={CheckOut} />
        <Stack.Screen name="ThankYouScreen" component={ThankYou} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
