import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {Colors} from '../Constant/Color';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: Colors.darkSecondry,
        },
        headerTintColor: Colors.darkWhite,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="HomePage" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
