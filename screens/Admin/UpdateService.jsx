import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import SpinningTS from "../../components/SpinningTS";
import {
  headingText,
  defaultStyles,
  colors,
  authStyles as styles,
} from "../../styles/styles";
import RotatingStarLoader from "../../components/RotatingStarLoader";
import { Button, TextInput } from "react-native-paper";
import { inputStyling } from "./../../styles/styles";
import SelectComponent from "./../../components/SelectComponent";

const UpdateService = ({ navigation, route }) => {
  const loading = false;
  const loadingOther = false;

  const images = [
    {
      url: "https://www.twinstiarasandtantrums.com/wp-content/uploads/2022/05/smashed_iphone_c249ecb5-533c-4da2-85bf-85cb758592f7-v1623249323723.png",
      _id: "computerrepair_1920x720",
    },
    {
      url: "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg",
      _id: "webdeve",
    },
    {
      url: "https://www.sectorlink.com/img/blog/web-devel-important.jpg",
      _id: "code1",
    },
    {
      url: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191206194406/Tips-For-an-Indie-Game-Developer.png",
      _id: "game1",
    },
    {
      url: "https://ampakcellular.com/wp-content/uploads/2021/05/tablet-repair-services-500x500-1.jpg",
      _id: "tabletzxaasaczzcxdvfszxcv",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1namik09N-FGtTbIKWnXNyw1FoHSiE5Mc1A&usqp=CAU",
      _id: "repair5",
    },
  ];

  const [id] = useState(route.params.id);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Phone Repair");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    { _id: "Phone Repair", category: "Phone Repair" },
    { _id: "Computer Repair", category: "Computer Repair" },
    { _id: "App Development", category: "App Development" },
  ]);
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    console.log(name, price, stock, description, categoryID);
  };

  return (
    <>
      <View style={{ ...defaultStyles, backgroundColor: colors.color5 }}>
        <Header back={true} />
        {/* Heading */}
        <View
          style={{
            marginBottom: 20,
            paddingTop: 40,
          }}
        >
          <Text style={{ fontSize: 25, alignSelf: "center", marginBottom: 20 }}>
            <SpinningTS />
          </Text>
          <Text style={headingText}>Update Service</Text>
        </View>
        {loading ? (
          <RotatingStarLoader />
        ) : (
          <ScrollView
            style={{
              padding: 20,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: colors.color3,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                height: 750,
              }}
            >
              <Button
                onPress={() =>
                  navigation.navigate("serviceImages", {
                    id,
                    images,
                  })
                }
                textColor={colors.color1_light2}
              >
                Manage Images
              </Button>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputField}
                  //   {...inputOptions}
                  selectionColor={colors.color1}
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                  keyboardType="name-phone-pad"
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputField}
                  //   {...inputOptions}
                  selectionColor={colors.color1}
                  placeholder="Description"
                  value={description}
                  onChangeText={setDescription}
                  keyboardType="name-phone-pad"
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputField}
                  //   {...inputOptions}
                  selectionColor={colors.color1}
                  placeholder="Price"
                  value={price}
                  onChangeText={setPrice}
                  keyboardType="number-pad"
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputField}
                  //   {...inputOptions}
                  selectionColor={colors.color1}
                  placeholder="Stock"
                  value={stock}
                  onChangeText={setStock}
                  keyboardType="number-pad"
                  underlineColorAndroid="transparent"
                />
              </View>
              <Text
                style={{
                  ...inputStyling,
                  textAlign: "center",
                  textAlignVertical: "center",
                  borderRadius: 3,
                }}
                onPress={() => setVisible(true)}
              >
                {category}
              </Text>
              <Button
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                }}
                textColor={colors.color2}
                onPress={submitHandler}
                loading={loadingOther}
                disabled={loadingOther}
              >
                UPDATE
              </Button>
            </View>
          </ScrollView>
        )}
      </View>
      <SelectComponent
        categories={categories}
        setCategoryID={setCategoryID}
        setCategory={setCategory}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

export default UpdateService;
