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
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

const Cart = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const incrementHandler = (id, name, price, image, etoc, stock, quantity) => {
    const newQty = quantity + 1;
    if (stock <= quantity)
      return Toast.show({
        type: "error",
        text1: "Maximum Value Entered",
      });
    dispatch({
      type: "addToCart",
      payload: {
        service: id,
        name,
        price,
        image,
        etoc,
        stock,
        quantity: newQty,
      },
    });
  };

  const decrementHandler = (id, name, price, image, etoc, stock, quantity) => {
    const newQty = quantity - 1;

    if (1 >= quantity) return dispatch({ type: "removeFromCart", payload: id });

    dispatch({
      type: "addToCart",
      payload: {
        service: id,
        name,
        price,
        image,
        etoc,
        stock,
        quantity: newQty,
      },
    });
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
          {cartItems.length > 0 ? (
            cartItems.map((i, index) => (
              <CartItem
                navigate={navigate}
                key={i.service}
                id={i.service}
                name={i.name}
                stock={i.stock}
                etoc={i.etoc}
                amount={i.price}
                imgSrc={i.image}
                index={index}
                qty={i.quantity}
                incrementHandler={incrementHandler}
                decrementHandler={decrementHandler}
              />
            ))
          ) : (
            <Text
              style={{
                textAlign: "center",
                fontSize: 30,
              }}
            >
              {" "}
              No Items In Cart
            </Text>
          )}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>{cartItems.length} Item/s</Text>
        <Text>
          {cartItems.reduce(
            (prev, curr) => prev + curr.quantity * curr.price,
            0
          )}
        </Text>
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
