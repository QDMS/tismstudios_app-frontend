import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyles,
  headingText,
  inputStyling,
  authStyles as styles,
} from "../styles/styles";
import SpinningTS from "../components/SpinningTS";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../components/TogglePassword";
import { Button } from "react-native-paper";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userActions";
import { useMessageAndErrorFromUser } from "../utils/hook";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const dispatch = useDispatch();
  
  const loading = useMessageAndErrorFromUser(navigation, dispatch, "profile")



  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const inputOptions = {
    style: inputStyling,
    activeOutlineColor: colors.color1,
  };

  const submitHandler = () => {
    alert("All Prices For Services Are Not Final And Is Only A Deposit");
    dispatch(login(email, password));
  };

  return (
    <>
      <View style={{ ...defaultStyles, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 25, alignSelf: "center", marginBottom: 10 }}>
            <SpinningTS />
          </Text>
          <Text style={headingText}>Login</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              //   {...inputOptions}
              selectionColor={colors.color1}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              selectionColor={colors.color1}
              underlineStyle="none"
              style={styles.inputField}
              // {...inputOptions}
              placeholder="Password"
              secureTextEntry={passwordVisibility}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={handlePasswordVisibility}
            >
              <MaterialCommunityIcons
                style={{ position: "absolute", right: 15, bottom: -12 }}
                name={rightIcon}
                size={22}
                color={colors.color1}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgotPassword")}
          >
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <Button
            disabled={!email || !password}
            loading={loading}
            textColor={colors.color2}
            onPress={submitHandler}
            style={styles.btn}
          >
            LOGIN
          </Button>
          <Text style={styles.or}>OR</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Login;
