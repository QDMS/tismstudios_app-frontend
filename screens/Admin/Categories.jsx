import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  headingText,
  defaultStyles,
  colors,
  inputStyling,
} from "../../styles/styles";
import SpinningTS from "../../components/SpinningTS";
import Header from "../../components/Header";
import { Avatar, Button, TextInput } from "react-native-paper";
import { useMessageAndErrorFromOther, useSetCategories } from "../../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addCategory, deleteCategory } from "../../redux/actions/otherActions";

const Categories = ({navigation}) => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([])


  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useSetCategories(setCategories, isFocused)

  const loading = useMessageAndErrorFromOther(dispatch, navigation, "adminPanel")

  const inputOptions = {
    style: inputStyling,
    activeOutlineColor: colors.color1,
  };

  const deleteHandler = (id) => {
    console.log(`Deleting Category, ${id}`);

    dispatch(deleteCategory(id))
  };

  const submitHandler = () => {
    dispatch(addCategory(category))
  };

  return (
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
        <Text style={headingText}>Categories</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 20,
            minHeight: 400,
          }}
        >
          {categories.map((i) => (
            <CategoryCard
              name={i.category}
              id={i._id}
              key={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          selectionColor={colors.color1}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
          keyboardType="name-phone-pad"
          underlineColorAndroid="transparent"
        />
        <Button
          textColor={colors.color2}
          style={{ backgroundColor: colors.color1, margin: 20, padding: 6 }}
          loading={loading}
          disabled={!category}
          onPress={submitHandler}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

const CategoryCard = ({ name, id, deleteHandler }) => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardText}>{name}</Text>
    <TouchableOpacity onPress={() => deleteHandler(id)}>
      <Avatar.Icon
        icon={"delete"}
        size={40}
        style={{
          backgroundColor: colors.color1,
        }}
      />
    </TouchableOpacity>
  </View>
);

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
  cardContainer: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  cardText: {
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
