import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, defaultStyles } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SpinningTS from "../components/SpinningTS";
import SearchModel from "../components/SearchModel";
import ServiceCard from "../components/ServiceCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const categories = [
  { category: "Tablet Repair", _id: "Tablet Repair" },
  { category: "Software Consultant", _id: "Software Consultant" },
  { category: "Pet Cams", _id: "Pet Cams" },
  { category: "Phone Repair", _id: "Phone Repair" },
  { category: "Web Development", _id: "Web Development" },
  { category: "Mobile Development", _id: "Mobile Development" },
  { category: "Game Development", _id: "Game Development" },
  { category: "Computer Repair", _id: "Computer Repair" },
  { category: "Graphics Design", _id: "Graphics Design" },
];

const services = [
  {
    price: 100,
    etoc: "1 hour",
    name: "Iphone 12 Screen Repair",
    _id: "iphone 12 screen repair",
    images: [
      {
        url: "https://www.twinstiarasandtantrums.com/wp-content/uploads/2022/05/smashed_iphone_c249ecb5-533c-4da2-85bf-85cb758592f7-v1623249323723.png",
      },
    ],
  },
  {
    price: 4000,
    toc: " 3 months",
    name: "E-commerce Mobile App",
    _id: "E-commerce Mobile App",
    images: [
      {
        url: "https://idapgroup.com/blog/blog/wp-content/uploads/2020/12/image1.png",
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id) => {
    console.log("Add To Cart", id);
  };

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

      <SafeAreaView 
      style={defaultStyles}
      >
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          {/* Header */}
          <Header back={false} />
          <Text style={{ maxWidth: 220, fontSize: 12, position: "absolute", top: 70, left: 30, height: 35 }}>
            ETOC ✹ (Estimated Time Of Completion) On All Services
          </Text>
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
            <Text style={{ fontSize: 20, fontWeight: "900" }}>Products</Text>
          </View> */}
              <View style={{ flexDirection: "column", paddingHorizontal: 75 }}>
                <Text style={{ fontSize: 25, alignSelf: "center" }}>
                  <SpinningTS />
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "900" }}>
                  Services
                </Text>
              </View>
            </View>
            {/* Search Bar */}
            <View>
              <TouchableOpacity
                onPress={() => setActiveSearch((prev) => !prev)}
              >
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
