import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStartedScreen } from './src/GetStartedScreen';
import { LoginScreen } from './src/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: "Welcome"}}
        />
        <Stack.Screen name="Get Started" component={GetStartedScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}