import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, defaultStyles } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SpinningTS from "../components/SpinningTS";
import SearchModel from "../components/SearchModel";
import ServiceCard from "../components/ServiceCard";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../redux/actions/serviceAction";
import { useSetCategories } from "../utils/hooks";
import Toast from "react-native-toast-message";


const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigation();

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { services } = useSelector((state) => state.service);

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id, name, price, image, etoc, stock) => {
    if (stock === 0) return Toast.show({
      type: "error",
      text1: "Out Of Stock"
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
        quantity: 1,
      },
    });
    Toast.show({
      type: "success",
      text1: "Add To Cart"
    });
  };

  useSetCategories(setCategories, isFocused);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(getAllServices(searchQuery, category));
    }, 500);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [dispatch, searchQuery, category, isFocused]);

  return (
    <>
      {activeSearch && (
        <SearchModel
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          services={services}
        />
      )}

      <SafeAreaView style={defaultStyles}>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        {/* Header */}
        <Header back={false} />
        
        {/* Heading Row*/}
        <View
          style={{
            paddingTop: 25,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <View style={{ flexDirection: "row" }}>
            {/* <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 25, alignSelf: "center"  }}><SpinningTS/></Text>
            <Text style={{ fontSize: 20, fontWeight: "900" }}>services</Text>
          </View> */}
            <View style={{ flexDirection: "column",top: -60, paddingHorizontal: 75 }}>
              <Text style={{ fontSize: 25, alignSelf: "center" }}>
                <SpinningTS />
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "900" }}>Services</Text>
            </View>
          </View>
          {/* Search Bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                color={"grey"}
                size={50}
                style={{
                  backgroundColor: colors.color2,
                  elevation: 8,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Categories */}
        <View style={{ flexDirection: "row", height: 80 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color:
                      category === item._id ? colors.color2 : colors.color3,
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
        {/* Services */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {services.map((item, index) => (
              <ServiceCard
                stock={item.stock}
                name={item.name}
                etoc={item.etoc}
                price={item.price}
                image={item.images[0]?.url}
                addToCartHandler={addToCartHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
