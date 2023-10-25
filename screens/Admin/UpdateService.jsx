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
import {
  useMessageAndErrorFromOther,
  useSetCategories,
} from "../../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServiceDetails } from "../../redux/actions/serviceAction";
import { updateService } from "../../redux/actions/otherActions";

const UpdateService = ({ navigation, route }) => {

  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const { service, loading } = useSelector((state) => state.service);

  const [id] = useState(route.params.id);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [etoc, setEtoc] = useState('');
  const [category, setCategory] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [categories, setCategories] = useState([]);

  useSetCategories(setCategories, isFocused);

  const submitHandler = () => {

    dispatch(updateService(id, name, description, price, stock, etoc, categoryID))
  };

  const loadingOther = useMessageAndErrorFromOther(
    dispatch,
    navigation,
    "adminPanel"
  );

  useEffect(() => {
    dispatch(getServiceDetails(id));
  }, [dispatch, id, isFocused]);

  useEffect(() => {
    if (service) {
      setName(service.name);
      setDescription(service.description);
      setPrice(String(service.price));
      setStock(String(service.stock));
      setEtoc(String(service.etoc));
      setCategory(service.category?.category);
      setCategoryID(service.category?._id);
    }
  }, [service]);

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
                height: 800,
              }}
            >
              <Button
                onPress={() =>
                  navigation.navigate("serviceImages", {
                    id,
                    images: service.images,
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
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputField}
                  //   {...inputOptions}
                  selectionColor={colors.color1}
                  placeholder="ETC"
                  value={etoc}
                  onChangeText={setEtoc}
                  keyboardType="name-phone-pad"
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
