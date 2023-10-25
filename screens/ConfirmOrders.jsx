import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors, defaultStyles } from "../styles/styles";
import Header from "../components/Header";
import SpinningTS from "../components/SpinningTS";
import ConfirmOrderItem from "../components/ConfirmOrderItem";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { useState } from "react";

const ConfirmOrders = () => {
  const navigate = useNavigation();
  const { cartItems } = useSelector((state) => state.cart);
  const [itemsPrice] = useState(
    cartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)
  );
  const [shippingCharges] = useState(itemsPrice>500?0:20);
  const [tax] = useState(Number((0.07 * itemsPrice).toFixed()));
  const [totalAmount] = useState(itemsPrice + shippingCharges + tax);

  const PriceTag = ({ heading, value }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
      }}
    >
      <Text
        style={{
          fontWeight: "800",
        }}
      >
        {heading}
      </Text>
      <Text>${value}</Text>
    </View>
  );

  return (
    <View style={defaultStyles}>
      <Header back={true} />
      {/* Heading */}
      <Heading />
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i) => (
            <ConfirmOrderItem
              key={i.service}
              price={i.price}
              image={i.image}
              name={i.name}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>
      <PriceTag heading={"Subtotal"} value={itemsPrice} />
      <PriceTag heading={"Shipping"} value={shippingCharges} />
      <PriceTag heading={"Tax"} value={tax} />
      <PriceTag heading={"Total"} value={totalAmount} />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigate.navigate("payment", {
            itemsPrice,
            shippingCharges,
            tax,
            totalAmount,
          })
        }
      >
        <Button
          textColor={colors.color2}
          icon={"credit-card-outline"}
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 10,
            top: 30,
          }}
        >
          Payment
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const Heading = () => (
  <View style={{ paddingTop: 40 }}>
    <View
      style={{
        flexDirection: "column",
        paddingHorizontal: 60,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "900" }}>Confirm</Text>
      <Text style={{ fontSize: 20, fontWeight: "900" }}>Order</Text>
      <Text style={{ fontSize: 20, marginBottom: -8 }}>With</Text>
      <Text style={{ fontSize: 25, alignSelf: "center" }}>
        <SpinningTS />
      </Text>
    </View>
  </View>
);

export default ConfirmOrders;

const styles = StyleSheet.create({});
