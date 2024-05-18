import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Login from './app/screens/login/index';
import { useEffect, useState } from 'react';

export default function App() {

  useEffect(() => {
  }, [])

  return (
    <View>
      {/* Login */}
      <Login />


      <StatusBar />
    </View>
  );
}
