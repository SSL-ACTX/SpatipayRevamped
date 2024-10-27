import React from 'react';
import { NavigationContainer, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import AlbumScreen from './screens/AlbumScreen';
import HomeScreen from './screens/HomeScreen';
import TopHitPH from './screens/TopHitPH';
import SongDetails from './screens/SongDetails';
import SearchScreen from './screens/SearchScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createStackNavigator();

export default function App() {
  const scheme = useColorScheme();

  const DarkTheme = {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      primary: '#fff',
      background: '#121212',
      card: '#1f1f1f',
      text: '#ffffff',
    },
  };

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : undefined}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AlbumScreen" component={AlbumScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TopHitPH" component={TopHitPH} options={{ headerShown: false }} />
        <Stack.Screen name="SongDetails" component={SongDetails} options={{ headerShown: false }} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}