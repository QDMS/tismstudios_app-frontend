import { ScrollView, Text, TextInput, View } from "react-native";
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
import Header from "../components/Header";

const UpdateProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [usState, setUsState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const inputOptions = {
    style: inputStyling,
    activeOutlineColor: colors.color1,
  };

  const loading = false;

  const submitHandler = () => {
    alert("Yeah It Works");
  };

  return (
    <View style={{ ...defaultStyles }}>
      <Header back={true} />
      {/* Heading */}
      <View
        style={{
          marginBottom: 20,
          paddingTop: 30,
        }}
      >
        <Text style={{ fontSize: 25, alignSelf: "center", marginBottom: 10 }}>
          <SpinningTS />
        </Text>
        <Text style={headingText}>Update Profile</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          padding: 20,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              //   {...inputOptions}
              selectionColor={colors.color1}
              placeholder="Name"
              value={name}
              onChangeText={setName}
              keyboardType="name-phone-pad"
              underlineColorAndroid="transparent"
            />
          </View>
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
              style={styles.inputField}
              //   {...inputOptions}
              selectionColor={colors.color1}
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="number-pad"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              //   {...inputOptions}
              selectionColor={colors.color1}
              placeholder="Street Address"
              value={address}
              onChangeText={setAddress}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              //   {...inputOptions}
              selectionColor={colors.color1}
              placeholder="City"
              value={city}
              onChangeText={setCity}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              //   {...inputOptions}
              selectionColor={colors.color1}
              placeholder="State or Province"
              value={usState}
              onChangeText={setUsState}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              //   {...inputOptions}
              selectionColor={colors.color1}
              placeholder="Zip Code"
              value={zipCode}
              keyboardType="number-pad"
              onChangeText={setZipCode}
              underlineColorAndroid="transparent"
            />
          </View>
          <Button
            loading={loading}
            textColor={colors.color2}
            onPress={submitHandler}
            style={styles.btn}
          >
            UPDATE
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;
