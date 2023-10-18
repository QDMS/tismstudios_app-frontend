import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ServiceDetails from "./screens/ServiceDetails";
import Toast from "react-native-toast-message";
import Cart from "./screens/Cart";
import ConfirmOrders from "./screens/ConfirmOrders";
import Payments from "./screens/Payments";

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
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="bottom" bottomOffset={63}/>
    </NavigationContainer>
  );
};

export default Main;
