import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemListScreen from './screens/ItemListScreen'; 
import ItemDetailScreen from './screens/ItemDetailScreen'; 
import './styles/Global.css'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ItemList">
        <Stack.Screen name="ItemList" component={ItemListScreen} />
        <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
