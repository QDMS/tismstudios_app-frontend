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
import { Button } from "react-native-paper";
import Footer from "../components/Footer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from "../components/TogglePassword";

const Verification = ({ navigation }) => {
  const [otp, setOtp] = useState();
  const [password, setPassword] = useState();

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  useTogglePasswordVisibility();

  const inputOptions = {
    style: inputStyling,
    activeOutlineColor: colors.color1,
  };

  const loading = false;

  const submitHandler = () => {
    alert("Yeah It Works");
    //TODO: will remove this in future
    navigation.navigate("login");
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
          <Text style={headingText}>Reset Password</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              //   {...inputOptions}
              selectionColor={colors.color1}
              placeholder="OTP"
              value={otp}
              onChangeText={setOtp}
              keyboardType="number-pad"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              selectionColor={colors.color1}
              underlineStyle="none"
              style={styles.inputField}
              // {...inputOptions}
              placeholder="New Password"
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

          <Button
            disabled={!otp || !password}
            loading={loading}
            textColor={colors.color2}
            onPress={submitHandler}
            style={styles.btn}
          >
            Reset
          </Button>
          <Text style={styles.or}>OR</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("forgotPassword")}
          >
            <Text style={styles.link}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Verification;