import { useState, useEffect, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importando navegacoes

//importando fonts
import { useFonts } from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_200ExtraLight
} from "@expo-google-fonts/poppins";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { Login } from "./src/screens/Login/Login";
import { StatusBar } from "react-native";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";
import { ForgotPassword } from "./src/screens/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./src/screens/ResetPassword/ResetPassword";
import { EmailVerify } from "./src/screens/EmailVerify/EmailVerify";
import { Home } from "./src/screens/Home/Home";
import { MapScreen } from "./src/screens/MapScreen/MapScreen";
import { EditCar } from "./src/screens/EditCar/EditCar";
import { Main } from "./src/screens/Main/Main";

//instancia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    Poppins_200ExtraLight,
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
          name="Main"
          component={Main}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name='Navigation'
          component={Navigation}
          options={{ title: 'Navigation' }}
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

        <Stack.Screen
          name="EmailVerify"
          component={EmailVerify}
          options={{ title: "EmailVerify" }}
        />

        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ title: "MapScreen" }} />

        <Stack.Screen
          name="EditCar"
          component={EditCar}
          options={{ title: "EditCar" }} />

      </Stack.Navigator>

      <StatusBar
        style="auto"
      />
    </NavigationContainer>
  )
}