import { useState, useEffect, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importando navegacoes

//importando fonts
import { useFonts } from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { Login } from "./src/screens/Login/Login";
import { StatusBar } from "react-native";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";
import { ForgotPassword } from "./src/screens/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./src/screens/ResetPassword/ResetPassword";
import { Home } from "./src/screens/Home/Home";

//instancia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen
          name='Navigation'
          component={Navigation}
          options={{ title: 'Navigation' }}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: "CreateAccount" }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: "ForgotPassword" }}
        />

        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ title: "ResetPassword" }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />

      </Stack.Navigator>

      <StatusBar
        style="auto"
      />
    </NavigationContainer>
  )
}