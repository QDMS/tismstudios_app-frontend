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
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";
import Heading from "../components/Heading";

export const cartItems = [
  {
    name: "Iphone 12 Screen Repair",
    image:
      "https://www.twinstiarasandtantrums.com/wp-content/uploads/2022/05/smashed_iphone_c249ecb5-533c-4da2-85bf-85cb758592f7-v1623249323723.png",
    service: "Iphone 12 Screen Repair",
    stock: 3,
    price: 100,
    quantity: 2,
  },
  {
    name: "E-commerce Mobile App",
    image:
      "https://idapgroup.com/blog/blog/wp-content/uploads/2020/12/image1.png",
    service: "E-commerce Mobile App",
    stock: 99,
    price: 4000,
    quantity: 1,
  },
];

const Cart = () => {
  const navigate = useNavigation();

  const incrementHandler = (id, qty, stock) => {
    console.log("Increasing", id, qty, stock);
  };

  const decrementHandler = (id, qty) => {
    console.log("decreasing", id, qty);
  };

  return (
    <View style={{ ...defaultStyles, padding: 0 }}>
      {/* Header */}
      <Header back={true} emptyCart={true} />
      {/* Heading */}
      <Heading text1="Shopping" text2="Cart" />
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i, index) => (
            <CartItem
              navigate={navigate}
              key={i.service}
              id={i.service}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>$5</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmOrder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart-heart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
