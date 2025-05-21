import React, { useState } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Bookmark from './src/screens/Bookmark';
import Profile from './src/screens/Profile';
import FormScreen from './src/screens/FormScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  const handleToggleBookmark = (item) => {
    const isBookmarked = bookmarkedItems.find((b) => b.id === item.id);
    if (isBookmarked) {
      setBookmarkedItems((prev) => prev.filter((b) => b.id !== item.id));
    } else {
      setBookmarkedItems((prev) => [...prev, item]);
    }
  };

  const HomeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen">
        {() => (
          <Home
            bookmarkedItems={bookmarkedItems}
            onToggleBookmark={handleToggleBookmark}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="FormScreen" component={FormScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarLabel: route.name,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarIcon: () => null,
          tabBarStyle: {
            height: 60,
            paddingBottom: 10,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Bookmark">
          {() => (
            <Bookmark
              bookmarkedItems={bookmarkedItems}
              onToggleBookmark={handleToggleBookmark}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
