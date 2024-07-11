import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import ProductList from './ProductList';
// import ProductDetail from './ProductDetail';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
   
  );
}
