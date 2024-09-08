import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { StyleSheet, Text, View } from 'react-native';

import HomePage from './src/pages/home/HomePage';
import QrCodeGeneratorPage from './src/pages/qrCodeGenerator/QrCodeGeneratorPage'
import QrCodeScanPage from './src/pages/qrCodeScan/QrCodeScanPage';
import SavedLinksPage from './src/pages/SavedLinks/SavedLinksPage'

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={HomePage}/>
        <stack.Screen name='QrCodeGenerator' component={QrCodeGeneratorPage} />
        <stack.Screen name='QrCodeScan' component={QrCodeScanPage} />
        <stack.Screen name='SavedLinks' component={SavedLinksPage} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

