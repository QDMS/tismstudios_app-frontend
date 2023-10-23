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
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions/otherActions";
import { useMessageAndErrorFromOther } from "../utils/hooks";

const UpdateProfile = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone.toString());
  const [address, setAddress] = useState(user?.address);
  const [city, setCity] = useState(user?.city);
  const [usState, setUsState] = useState(user?.usState);
  const [zipCode, setZipCode] = useState(user?.zipCode.toString());

  const dispatch = useDispatch();

  const inputOptions = {
    style: inputStyling,
    activeOutlineColor: colors.color1,
  };

  const loading = useMessageAndErrorFromOther(dispatch, navigation, "profile");

  const submitHandler = () => {
    dispatch(
      updateProfile(name, email, phone, address, city, usState, zipCode)
    );
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
