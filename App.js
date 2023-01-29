import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './src/MainScreen';
import { LoginScreen } from './src/LoginScreen';
import { APIProvider } from './src/contexts/APIContext';
import { PostsProvider } from './src/contexts/PostsContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <APIProvider>
      <PostsProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: "Welcome"}}
            />
            <Stack.Screen name="Main Screen" component={MainScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PostsProvider>
    </APIProvider>
  );
}