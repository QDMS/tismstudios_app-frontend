import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/styles";
import MyModal from "./MyModal";

const ServiceListItems = ({
  navigate,
  deleteHandler,
  i,
  price,
  stock,
  id,
  name,
  category,
  imgSrc,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={() => setOpenModal((prev) => !prev)}
        onPress={() => navigate.navigate("servicedetails", { id })}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: i % 2 === 0 ? colors.color1 : colors.color3,
          }}
        >
          <Image
            source={{
              uri: imgSrc,
            }}
            style={{
              width: 40,
              height: 40,
              resizeMode: "cover",
              borderRadius: 5,
            }}
          />

          <Text
            style={{
              width: 40,
              left: 2,
              color: colors.color2,
              fontSize: 12,
            }}
            numberOfLines={1}
          >
            ${price}
          </Text>

          <Text
            style={{
              maxWidth: 90,
              left: 2,
              color: colors.color2,
              fontSize: 12,
            }}
            numberOfLines={3}
          >
            ${name}
          </Text>

          <Text
            style={{
              width: 70,
              color: colors.color2,
              fontSize: 12,
            }}
            numberOfLines={2}
          >
            {category}
          </Text>

          <Text
            style={{
              width: 40,
              color: colors.color2,
            }}
            numberOfLines={1}
          >
            {stock}
          </Text>
        </View>
      </TouchableOpacity>
      {openModal && (
        <MyModal id={id} deleteHandler={deleteHandler} navigate={navigate} 
        setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default ServiceListItems;
