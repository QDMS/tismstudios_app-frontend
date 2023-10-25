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

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState();

  const inputOptions = {
    style: inputStyling,
    activeOutlineColor: colors.color1,
  };

  const loading = false;

  const submitHandler = () => {
    alert("Yeah It Works");
    //TODO: will remove this in future
    navigation.navigate("verify");
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
          <Text style={headingText}>Forgot Password</Text>
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

          <Button
            disabled={!email}
            loading={loading}
            textColor={colors.color2}
            onPress={submitHandler}
            style={styles.btn}
          >
            Send OTP
          </Button>
          <Text style={styles.or}>OR</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.link}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default ForgotPassword;
