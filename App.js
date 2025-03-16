import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home' // importanção da tela home
import Perfil from './components/Perfil' // importação da tela Perfil

// Objeto com 2 propriedades: Screen e  Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Componente que gerencia a arvore de navegação
    <NavigationContainer initialRouteName="Home"> 
      {/* Navegador que possui as telas */}
      <Stack.Navigator>
        {/* Telas */}
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Perfil" component={Perfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
