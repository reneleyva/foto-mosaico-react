import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  MainCamera from './components/MainCamera'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
            name="Camera"
            component={MainCamera}
            options={{title: "Lol"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
