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
import Header from "../components/Header";

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const inputOptions = {
    style: inputStyling,
    activeOutlineColor: colors.color1,
  };

  const loading = false;

  const submitHandler = () => {
    alert("Yeah It Works");
  };

  return (
    <View style={{ ...defaultStyles, backgroundColor: colors.color2 }}>
      <Header back={true} />
      {/* Heading */}
      <View
        style={{
          marginBottom: 20,
          paddingTop: 30,
        }}
      >
        <Text style={{ fontSize: 25, alignSelf: "center", marginBottom: 20 }}>
          <SpinningTS />
        </Text>
        <Text style={headingText}>Change Password</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            selectionColor={colors.color1}
            underlineStyle="none"
            style={styles.inputField}
            // {...inputOptions}
            placeholder="Old Password"
            secureTextEntry={passwordVisibility}
            value={oldPassword}
            onChangeText={setOldPassword}
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
        <View style={styles.inputContainer}>
          <TextInput
            selectionColor={colors.color1}
            underlineStyle="none"
            style={styles.inputField}
            // {...inputOptions}
            placeholder="New Password"
            secureTextEntry={passwordVisibility}
            value={newPassword}
            onChangeText={setNewPassword}
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
        <View
          style={{
            top: 75,
          }}
        >
          <Button
            disabled={!oldPassword || !newPassword}
            loading={loading}
            textColor={colors.color2}
            onPress={submitHandler}
            style={styles.btn}
          >
            CHANGE
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;
