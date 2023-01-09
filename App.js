import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './views/Home'
import { SelectPokemon } from './views/SelectPokemon'
import { MainGame } from './views/MainGame'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SelectPokemon" component={SelectPokemon}/>
        <Stack.Screen name="MainGame" component={MainGame}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
