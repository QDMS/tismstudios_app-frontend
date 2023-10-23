import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  headingText,
  defaultStyles,
  colors,
  defaultImg,
} from "../styles/styles";
import SpinningTS from "../components/SpinningTS";
import { Avatar, Button } from "react-native-paper";
import ButtonBox from "../components/ButtonBox";
import Footer from "../components/Footer";
import RotatingStarLoader from "../components/RotatingStarLoader";
import { getType } from 'mime';
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../redux/actions/userActions";
import {
  useMessageAndErrorFromOther,
  useMessageAndErrorFromUser,
} from "../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
import { updatePic } from "../redux/actions/otherActions";

const Profile = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [avatar, setAvatar] = useState(
    user?.avatar ? user.avatar.url : defaultImg
  );

  const isFocused = useIsFocused();

  const loading = useMessageAndErrorFromUser(navigation, dispatch, "login");

  const logoutHandler = () => {
    dispatch(logout());
  };
  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminPanel");
        break;
      case "Order":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateProfile");
        break;
      case "Password":
        navigation.navigate("changePassword");
        break;
      case "Log Out":
        logoutHandler();
        break;

      default:
      case "Order":
        navigation.navigate("orders");
        break;
    }
  };

  const loadingPic = useMessageAndErrorFromOther(
    dispatch,
    null,
    null,
    loadUser
  );

  useEffect(() => {
    if (route.params?.image) {
      // Update the avatar state
      setAvatar(route.params.image);
      console.log(route.params.image);
  
      // Create a FormData object and append the image data
      const myForm = new FormData();
      myForm.append("file", {
        uri: route.params.image,
        type: getType(route.params.image),
        name: route.params.image.split("/").pop(),
      });
  
      // Dispatch the updatePic action with the FormData
      dispatch(updatePic(myForm));
    }
  
    // Dispatch the loadUser action
    dispatch(loadUser());
  }, [route.params, dispatch, isFocused]);

  // useEffect(() => {
  //   if (user?.avatar) {
  //     setAvatar(user.avatar.url);
  //   }
  // }, [user]);

  return (
    <>
      <View style={defaultStyles}>
        {/* Heading */}
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 25, alignSelf: "center", marginBottom: 20 }}>
            <SpinningTS />
          </Text>
          <Text style={headingText}>Profile</Text>
        </View>
        {/* Loading */}

        {loading ? (
          <RotatingStarLoader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                source={{
                  uri: avatar,
                }}
                size={120}
                style={{ backgroundColor: colors.color1 }}
              />

              <TouchableOpacity
                disabled={loadingPic}
                onPress={() =>
                  navigation.navigate("camera", { updateProfile: true })
                }
              >
                <Button
                  disabled={loadingPic}
                  loading={loadingPic}
                  textColor={colors.color1_light2}
                >
                  Change Photo
                </Button>
              </TouchableOpacity>

              <Text style={styles.name}>{user?.name}</Text>
              <Text
                style={{
                  fontWeight: "300",
                  color: colors.color2,
                }}
              >
                {user?.email}
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"Orders"}
                  icon={"format-list-bulleted-type"}
                />
                {user?.role === "admin" && (
                  <ButtonBox
                    handler={navigateHandler}
                    icon={"view-dashboard-variant"}
                    text={"Admin"}
                    reverse={true}
                  />
                )}
                <ButtonBox
                  handler={navigateHandler}
                  text={"Profile"}
                  icon={"account-edit"}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"Password"}
                  icon={"lock-question"}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={"Log Out"}
                  icon={"exit-run"}
                />
              </View>
            </View>
          </>
        )}
      </View>
      <Footer />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});
