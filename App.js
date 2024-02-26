import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/pages/Login';
import { useEffect, useState } from 'react';
import MainPage from './components/pages/MainPage';
import SignUp from './components/pages/SignUp';
import IndexPage from './components/pages/IndexPage';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  return (
    <NavigationContainer styles={styles.container}>
      <StatusBar barStyle='default' />
        <IndexPage />
        {/* {isLoggedIn ? (
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{ headerShown: false }} // 헤더바 숨기기 옵션
        /> */}
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});