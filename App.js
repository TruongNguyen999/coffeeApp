import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Login from './app/screens/login/index';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store';

export default function App() {

  useEffect(() => {
  }, [])

  return (
    <Provider store={ store }>
      <View>
        {/* Login */}
        <Login />
    

        <StatusBar />
      </View>
    </Provider>
    
  );
}
