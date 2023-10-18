import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ServiceDetails from "./screens/ServiceDetails";
import Toast from "react-native-toast-message";
import Cart from "./screens/Cart";
import ConfirmOrders from "./screens/ConfirmOrders";
import Payments from "./screens/Payments";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import Verification from "./screens/Verification";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="servicedetails" component={ServiceDetails} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="confirmOrder" component={ConfirmOrders} />
          <Stack.Screen name="payment" component={Payments} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          {/* Password Resetting Route */}
          <Stack.Screen name="forgotPassword" component={ForgotPassword} />
          <Stack.Screen name="verify" component={Verification} />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="bottom" bottomOffset={63}/>
    </NavigationContainer>
  );
};

export default Main;
