import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  colors,
  defaultImg,
  defaultStyles,
  headingText,
  inputStyling,
  authStyles as styles,
} from "../styles/styles";
import SpinningTS from "../components/SpinningTS";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../components/TogglePassword";
import { Avatar, Button } from "react-native-paper";
import Footer from "../components/Footer";
import mime from "mime";
import { useDispatch } from "react-redux";
import { registration } from "../redux/actions/userActions";
import { useMessageAndErrorFromUser } from "../utils/hook";

const Register = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [usState, setUsState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const inputOptions = {
    style: inputStyling,
    activeOutlineColor: colors.color1,
  };

  const dispatch = useDispatch();

  const disableBtn =
    !name ||
    !email ||
    !password ||
    !phone ||
    !address ||
    !city ||
    !usState ||
    !zipCode;

  const submitHandler = () => {
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("phone", phone);
    myForm.append("address", address);
    myForm.append("city", city);
    myForm.append("usState", usState);
    myForm.append("zipCode", zipCode);

    if (avatar !== "") {
      myForm.append("file", {
        uri: avatar,
        type: mime.getType(avatar),
        name: avatar.split("/").pop(),
      });
    }

    dispatch(registration(myForm));
  };

  const loading = useMessageAndErrorFromUser(navigation, dispatch, "profile");

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
    }
  }, [route.params, setAvatar]);

  return (
    <>
      <View style={{ ...defaultStyles, backgroundColor: colors.color3 }}>
        {/* Heading */}
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 25, alignSelf: "center", marginBottom: 10 }}>
            <SpinningTS />
          </Text>
          <Text style={headingText}>Registration</Text>
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
          <View style={{ justifyContent: "center" }}>
            <Avatar.Image
              style={{ alignSelf: "center", backgroundColor: colors.color1 }}
              size={100}
              source={{ uri: avatar ? avatar : defaultImg }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button textColor={colors.color1_light2}>Change Photo</Button>
            </TouchableOpacity>
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
              disabled={disableBtn}
              loading={loading}
              textColor={colors.color2}
              onPress={submitHandler}
              style={styles.btn}
            >
              REGISTER
            </Button>
            <Text style={styles.or}>OR</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={styles.link}>Log in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Register;
