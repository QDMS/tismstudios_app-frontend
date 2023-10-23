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
import Profile from "./screens/Profile";
import UpdateProfile from "./screens/UpdateProfile";
import ChangePassword from "./screens/ChangePassword";
import Orders from "./screens/Orders";
import AdminPanel from "./screens/Admin/AdminPanel";
import Categories from "./screens/Admin/Categories";
import NewService from "./screens/Admin/NewService";
import AdminOrders from "./screens/Admin/AdminOrders";
import UpdateService from "./screens/Admin/UpdateService";
import ServiceImages from "./screens/Admin/ServiceImages";
import CameraComponent from "./screens/CameraComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/userActions";

const Stack = createNativeStackNavigator();

const Main = () => {
  const dispatch = useDispatch();
  const {user } = useSelector(state=> state.user)

  console.log(user);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

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
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="updateProfile" component={UpdateProfile} />
          <Stack.Screen name="orders" component={Orders} />
          <Stack.Screen name="camera" component={CameraComponent} />

          {/* Password Resetting Route */}
          <Stack.Screen name="changePassword" component={ChangePassword} />
          <Stack.Screen name="forgotPassword" component={ForgotPassword} />
          <Stack.Screen name="verify" component={Verification} />

          {/* Admin Routes */}
          <Stack.Screen name="adminPanel" component={AdminPanel} />
          <Stack.Screen name="categories" component={Categories} />
          <Stack.Screen name="adminOrders" component={AdminOrders} />
          <Stack.Screen name="newService" component={NewService} />
          <Stack.Screen name="updateService" component={UpdateService} />
          <Stack.Screen name="serviceImages" component={ServiceImages} />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="bottom" bottomOffset={63} />
    </NavigationContainer>
  );
};

export default Main;
