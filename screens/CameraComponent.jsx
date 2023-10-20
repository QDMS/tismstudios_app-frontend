import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Avatar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { colors, defaultStyles } from "../styles/styles";
import * as ImagePicker from "expo-image-picker";

const CameraComponent = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);
  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false)
      return alert("Permission To Access Gallery Is Required");

    const data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (route.params?.newService)
      return navigation.navigate("newService", { image: data.assets[0].uri });
    if (route.params?.updateService)
      return navigation.navigate("serviceImages", {
        image: data.assets[0].uri,
      });
    if (route.params?.updateProfile)
      return navigation.navigate("profile", { image: data.assets[0].uri });
    else return navigation.navigate("register", { image: data.assets[0].uri });
  };

  const clickPicture = async () => {
    const data = await camera.takePictureAsync();

    if (route.params?.newService)
      return navigation.navigate("newService", { image: data.uri });
    if (route.params?.updateService)
      return navigation.navigate("serviceImages", {
        image: data.uri,
      });
    if (route.params?.updateProfile)
      return navigation.navigate("profile", { image: data.uri });
    else return navigation.navigate("register", { image: data.uri });
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false)
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text
          style={{ fontSize: 40, textAlign: "center", color: colors.color1 }}
        >
          No Access To Camera
        </Text>
      </View>
    );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Camera
        type={type}
        style={{
          flex: 1,
          aspectRatio: 1,
        }}
        ratio={"1:1"}
        ref={(e) => setCamera(e)}
      />
      <View
        style={{
          flexDirection: "row",
          bottom: 10,
          width: "100%",
          justifyContent: "space-evenly",
          position: "absolute",
        }}
      >
        <MyIcon icon={"image-outline"} handler={openImagePicker} />
        <MyIcon icon={"camera-outline"} handler={clickPicture} />
        <MyIcon
          icon={"camera-flip-outline"}
          handler={() => {
            setType((prevType) =>
              prevType === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        />
      </View>
    </View>
  );
};

const MyIcon = ({ icon, handler }) => (
  <TouchableOpacity onPress={handler}>
    <LinearGradient
      style={styles.linearGradient}
      colors={["#f7f7f7", "#BA0C2F", "#303234"]}
    >
      <Avatar.Icon
        icon={icon}
        size={40}
        color={colors.color2}
        style={{
          backgroundColor: "transparent",
        }}
      />
    </LinearGradient>
  </TouchableOpacity>
);

export default CameraComponent;

const styles = StyleSheet.create({
  linearGradient: {
    height: 40,
    width: 40,
    borderRadius: 25,
    elevation: 10,
  },
});
