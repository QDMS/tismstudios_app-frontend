import { Platform, StatusBar, StyleSheet } from 'react-native';

export const colors = {
    color1: "#BA0C2F",
    color1_light: "#F8234E",
    color1_light2: "#FD4D70",
    color2: "#FFFFFF",
    color3: "#000000",
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

export const inputStyles = StyleSheet.create({
    height: 50,
    backgroundColor: colors.color2,
    marginVertical: 10,
    marginHorizontal: 20,
});