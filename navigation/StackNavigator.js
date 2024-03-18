import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ForgotPasswordScreen, LoginScreen, RegisterScreen } from '../screens';

export default class StackNavigator extends Component {
    render() {
      const Stack = createNativeStackNavigator();
      return (
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='Login' component={LoginScreen} />
              <Stack.Screen name='Register' component={RegisterScreen} />
              <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
  }

const styles = StyleSheet.create({})