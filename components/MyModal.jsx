import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const MyModal = ({ id, deleteHandler, navigate, setOpenModal }) => {
  return (
    <LinearGradient
      colors={["#BA0C2F", "#303234"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.linearGradient}
    >
      <View style={styles.innerContainer}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => setOpenModal(false)}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <Avatar.Icon
              icon={"window-close"}
              size={25}
              style={{
                backgroundColor: colors.color1,
              }}
            />
          </TouchableOpacity>
          <Text
            style={styles.text}
            onPress={() => navigate.navigate("updateService", { id })}
          >
            Edit
          </Text>
          <Button
            textColor={colors.color1_light2}
            onPress={() => deleteHandler(id)}
          >
            Delete
          </Button>
        </View>
      </View>
    </LinearGradient>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 200,
    alignSelf: "center",
    justifyContent: "center",
    zIndex: 100,
    backgroundColor: colors.color2,
    padding: 20,
    borderRadius: 10,
  },
  linearGradient: {
    height: 250,
    width: 300,
    borderRadius: 20,
    alignSelf: "center",
    elevation: 10,
  },
  innerContainer: {
    borderRadius: 15, // <-- Inner Border Radius
    flex: 1,
    margin: 20, // <-- Border Width
    backgroundColor: "#fff",
    justifyContent: "center",
    elevation: 10,
  },
  text: {
    fontWeight: "900",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
