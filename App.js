import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { StyleSheet, Text, View } from 'react-native';

import HomePage from './src/pages/home/HomePage';
import QrCodeGeneratorPage from './src/pages/qrCodeGenerator/QrCodeGeneratorPage'
import QrCodeScanPage from './src/pages/qrCodeScan/QrCodeScanPage';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={HomePage}/>
        <stack.Screen name='QrCodeGenerator' component={QrCodeGeneratorPage} />
        <stack.Screen name='QrCodeScan' component={QrCodeScanPage} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
