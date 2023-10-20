import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { headingText, defaultStyles, colors } from "../styles/styles";
import SpinningTS from "../components/SpinningTS";
import { Avatar, Button } from "react-native-paper";
import ButtonBox from "../components/ButtonBox";
import Footer from "../components/Footer";
import RotatingStarLoader from "../components/RotatingStarLoader";

const user = {
  name: "Qujuan Miller",
  email: "qujuanmiller@gmail.com",
};

const loading = false;

const Profile = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState(null);
  const logoutHandler = () => {
    console.log("Logging Out...");
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
  const shiningStarRef = useRef();

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
      // dispatch updatePic Here
    }
  }, [route.params, setAvatar]);

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
                onPress={() =>
                  navigation.navigate("camera", { updateProfile: true })
                }
              >
                <Button textColor={colors.color1_light2}>Change Photo</Button>
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
                <ButtonBox
                  handler={navigateHandler}
                  icon={"view-dashboard-variant"}
                  text={"Admin"}
                  reverse={true}
                />
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
