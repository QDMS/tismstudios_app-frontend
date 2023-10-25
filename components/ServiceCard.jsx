import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Button } from "react-native-paper";

const ServiceCard = ({
  stock,
  name,
  etoc,
  price,
  image,
  id,
  addToCartHandler,
  i,
  navigate,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigate.navigate("servicedetails", { id })}
    >
      <View
        style={{
          
          elevation: 15,
          width: 250,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 20,
          height: 400,
          backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            position: "absolute",
            left: 50,
            top: 105,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Text
              numberOfLines={3}
              style={{
                color: i % 2 === 0 ? colors.color2 : colors.color3,
                fontSize: 18,
                fontWeight: 300,
                width: "60%",
              }}
            >
              {name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                color: i % 2 === 0 ? colors.color2 : colors.color3,
                fontSize: 15,
                fontWeight: 700,
                alignSelf: "center",
              }}
            >
              ${price}
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: i % 2 === 0 ? colors.color2 : colors.color3,
                alignSelf: "center",
              }}
            >
              (ETC)
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: i % 2 === 0 ? colors.color2 : colors.color3,
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              {etoc}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          hitSlop={{ x: 25, y: 15 }}
          style={{
            backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
            borderRadius: 0,
            paddingVertical:5,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            width: "100%",
          }}
        >
          <Button
            onPress={() =>
              addToCartHandler(id, name, price, image, etoc, stock)
            }
          >
            <Text
              style={{ color: i % 2 === 0 ? colors.color1 : colors.color2 }}
            >
              Add To Cart
            </Text>
          </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
