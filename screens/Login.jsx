import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyles, inputStyling } from "../styles/styles";
import SpinningTS from "../components/SpinningTS";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../components/TogglePassword";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const inputOptions = {
    style: inputStyling,
    activeOutlineColor: colors.color1,
  };

  return (
    <View style={defaultStyles}>
      {/* Heading */}
      <View
        style={{
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 25, alignSelf: "center", marginBottom: 10 }}>
          <SpinningTS />
        </Text>
        <Text style={styles.headingText}>Login</Text>
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
          <TouchableOpacity onPress={handlePasswordVisibility}>
            <MaterialCommunityIcons
            style={{ position: "absolute", right: 15, bottom: -12 }}
              name={rightIcon}
              size={22}
              color={colors.color1}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: "center",
    elevation: 10,
  },
  inputContainer: {
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    backgroundColor: colors.color2,
    borderColor: colors.color1,
    marginVertical: 10
  },
  inputField: {
    padding: 14,
    fontSize: 22,
    width: '100%',
    backgroundColor: colors.color2,
    color: colors.color1
  },
  forgotPassword: {
    color: colors.color2,
    marginVertical: 20,
    alignSelf: "flex-end",
    fontWeight: "200"
  }
});
