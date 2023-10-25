import { Platform, StatusBar, StyleSheet } from "react-native";

export const colors = {
  color1: "#BA0C2F",
  color1_light: "#F8234E",
  color1_light2: "#FD4D70",
  color2: "#FFFFFF",
  color3: "#303234",
  color4: "transparent",
  color5: "#f2f2f2",
  color6: "#f7f7f7",
};

export const defaultStyles = StyleSheet.create({
  padding: 35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: colors.color2,
});

export const inputStyling = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color2,
  marginVertical: 10,
  marginHorizontal: 20,
});

export const headingText = StyleSheet.create({
  fontSize: 25,
  fontWeight: "500",
  textAlign: "center",
  backgroundColor: colors.color3,
  color: colors.color2,
  padding: 5,
  borderRadius: 5,
});

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: "center",
    elevation: 10,
  },
  inputContainer: {
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 4,
    backgroundColor: colors.color2,
    borderColor: colors.color1,
    marginVertical: 10,
  },
  inputField: {
    padding: 14,
    fontSize: 20,
    width: "100%",
    backgroundColor: colors.color2,
    color: colors.color1,
  },
  forgotPassword: {
    color: colors.color1_light2,
    marginVertical: 20,
    alignSelf: "flex-end",
    fontWeight: "500",
  },
  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
    top: -15
  },
  or: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "200",
    color: colors.color2,
  },
  link: {
    alignSelf: "center",
    fontSize: 20,
    color: colors.color1_light2,
    textTransform: "uppercase",
    marginVertical: 20,
    top: -10
  },
});

export const defaultImg =
  "https://img.icons8.com/arcade/64/000000/gender-neutral-user--v1.png";
