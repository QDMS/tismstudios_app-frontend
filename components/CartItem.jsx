import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";
import IconOptions from "./IconOptions";

const CartItem = ({
  id,
  name,
  stock,
  amount,
  imgSrc,
  etoc,
  index,
  qty,
  incrementHandler,
  decrementHandler,
  navigate,
}) => {
  return (
    <View style={{ flexDirection: "row", height: 100, marginVertical: 20 }}>
      <View
        style={{
          width: "40%",
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Image
          
          source={{
            uri: imgSrc,
          }}
          style={styles.img}
        />
      </View>
      <View
        style={{
          width: "40%",
          paddingHorizontal: 25,
        }}
      >
        <Text
          style={{ fontSize: 17 }}
          onPress={() => navigate.navigate("servicedetails", { id })}
        >
          {name}
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "900" }}>${amount}</Text>
      </View>
      <View style={styles.qtyContainer}>
        <TouchableOpacity onPress={() => incrementHandler(id, name, amount, imgSrc,etoc, stock, qty)}>
          <Avatar.Icon icon={"cart-plus"} size={35} {...IconOptions} />
        </TouchableOpacity>

        <Text style={styles.qtyText}>{qty}</Text>
        <TouchableOpacity onPress={() => decrementHandler(id, name, amount, imgSrc,etoc, stock, qty)}>
          <Avatar.Icon icon={"cart-minus"} size={35} {...IconOptions} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  qtyText: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  qtyContainer: {
    alignItems: "center",
    width: "20%",
    height: 80,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  img: {
    width: 200,
    height: "100%",
    resizeMode: "contain",
    top: "-20%",
    left: "10%",
  },
});
