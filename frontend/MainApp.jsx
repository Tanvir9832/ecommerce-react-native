import { View, Text, SafeAreaView, StatusBar, Platform } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home/Home";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";

const Stack = createNativeStackNavigator();
const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{headerShown : false}}>
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          {/* <Stack.Screen name="register" component={Register} />
          <Screen.Screen name="login" component={Login} /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
