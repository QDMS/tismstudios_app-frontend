import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, defaultStyles } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { Avatar, Button } from "react-native-paper";
import Toast from "react-native-toast-message";
import IconOptions from "../components/IconOptions";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;


const ServiceDetails = ({ route: { params } }) => {
  console.log(params.id);
  const name = "Iphone 12 Screen Repair";
  const price = "100";
  const etoc = "1 hour";
  const stock = 4;
  const description =
    "In need of iPhone repair services? Discover the step-by-step process of getting your iPhone repaired by professionals, ensuring a smooth and hassle-free experience.";
  const isCarousel = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const images = [
    {
      id: "imageId0",
      url: "https://www.twinstiarasandtantrums.com/wp-content/uploads/2022/05/smashed_iphone_c249ecb5-533c-4da2-85bf-85cb758592f7-v1623249323723.png",
    },
    {
      id: "imageId1",
      url: "https://idapgroup.com/blog/blog/wp-content/uploads/2020/12/image1.png",
    },
  ];

  const incrementQty = () => {
    if (stock <= quantity) return;
    setQuantity((prev) => prev + 1);
  };
  const decrementQty = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  addToCartHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out Of Stock",
      });
    Toast.show({ type: "success", text1: "Added To Cart" });
  };

  return (
    <View
      style={{
        ...defaultStyles,
        padding: 0,
        backgroundColor: colors.color1,
      }}
    >
      <Header back={true} />
      {/* Carousel */}
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -380,
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
        }}
      >
        <Text numberOfLines={2} style={{ fontSize: 25 }}>
          {name}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "900" }}>${price}</Text>
        <Text
          numberOfLines={8}
          style={{ letterSpacing: 1, lineHeight: 20, marginVertical: 15 }}
        >
          {description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 0,
            alignSelf: "flex-start",
          }}
        >
          <Text>ETOC {etoc}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
            paddingVertical: 25,
          }}
        >
          <Text
            style={{ color: colors.color3, fontWeight: "200", fontSize: 15 }}
          >
            Quantity
          </Text>
          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"cart-minus"} {...IconOptions} />
            </TouchableOpacity>
            <Text style={style.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"cart-plus"} {...IconOptions} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.9} onPress={addToCartHandler}>
          <Button
            icon={"cart-outline"}
            textColor={colors.color2}
            style={style.btn}
          >
            Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);
const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 50,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
    borderRadius: 350,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.color3,
  },
  quantity: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});
export default ServiceDetails;
