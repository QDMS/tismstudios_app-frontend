import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SpinningTS from "../../components/SpinningTS";
import {
  headingText,
  defaultStyles,
  colors,
  authStyles as styles,
} from "../../styles/styles";
import RotatingStarLoader from "../../components/RotatingStarLoader";
import { Avatar, Button, TextInput } from "react-native-paper";
import { inputStyling } from "./../../styles/styles";
import SelectComponent from "./../../components/SelectComponent";

const NewService = ({ navigation, route }) => {
  const loading = false;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
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

  useEffect(() => {
    if (route.params?.image) {
      setImage(route.params.image);
    }
  }, [route.params, setImage]);

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
          <Text style={headingText}>Add New Service</Text>
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
                height: 820,
              }}
            >
              <View
                style={{
                  width: 80,
                  height: 80,
                  alignSelf: "center",
                  marginBottom: 20,
                }}
              >
                <Avatar.Image
                  size={80}
                  style={{
                    backgroundColor: colors.color1,
                  }}
                  source={{
                    uri: image ? image : null,
                  }}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate("camera", { newService: true })
                  }
                >
                  <Avatar.Icon
                    icon={"camera"}
                    size={30}
                    color={colors.color3}
                    style={{
                      backgroundColor: colors.color2,
                      alignSelf: "center",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                    }}
                  />
                </TouchableOpacity>
              </View>
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
                loading={loading}
                disabled={loading}
              >
                CREATE
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

export default NewService;
