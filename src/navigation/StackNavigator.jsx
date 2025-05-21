import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home'; // Pastikan path-nya benar    
import BookmarkScreen from '../screens/Bookmark';
import ProfileScreen from '../screens/Profile';
import FormScreen from '../screens/FormScreen/Index.jsx';  // Pastikan path sesuai


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddData" component={FormScreen} /> {/* FormScreen terdaftar di sini */}
        <Stack.Screen name="Bookmark" component={BookmarkScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
