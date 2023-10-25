import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, defaultStyles, headingText } from "../../styles/styles";
import Header from "../../components/Header";
import SpinningTS from "../../components/SpinningTS";
import RotatingStarLoader from "../../components/RotatingStarLoader";
import ButtonBox from "../../components/ButtonBox";
import ServiceListHeading from "../../components/ServiceListHeading";
import ServiceListItems from "../../components/ServiceListItems";
import Chart from "../../components/Chart";
import { useAdminServices } from "../../utils/hooks";
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

const AdminPanel = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();


  const { loading, services, inStock, outOfStock } = useAdminServices(dispatch, isFocused);

  const navigationHandler = (text) => {
    switch (text) {
      case "Category":
        navigation.navigate("categories");
        break;
      case "All Orders":
        navigation.navigate("adminOrders");
        break;
      case "Service":
        navigation.navigate("newService");
        break;

      default:
        navigation.navigate("newService");
        break;
    }
  };
  const deleteServiceHandler = (id) => {
    console.log(`Deleting Service with ID: ${id}`);
  };
  return (
    <View style={defaultStyles}>
      <Header back={true} />
      <View
        style={{
          marginBottom: 20,
          paddingTop: 30,
        }}
      >
        <Text style={{ fontSize: 25, alignSelf: "center", marginBottom: 20 }}>
          <SpinningTS />
        </Text>
        <Text style={headingText}>Admin Panel</Text>
      </View>
      {loading ? (
        <RotatingStarLoader />
      ) : (
        <>
          <View
            style={{
              backgroundColor: colors.color3,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Chart inStock={inStock} outOfStock={outOfStock} />
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
              }}
            >
              <ButtonBox
                icon={"puzzle-plus"}
                text={"Service"}
                handler={navigationHandler}
              />
              <ButtonBox
                icon={"clipboard-check-multiple"}
                text={"All Orders"}
                handler={navigationHandler}
                reverse={true}
              />
              <ButtonBox
                icon={"puzzle-plus"}
                text={"Category"}
                handler={navigationHandler}
              />
            </View>
          </View>

          <ServiceListHeading />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {services.map((item, index) => (
                <ServiceListItems
                  navigate={navigation}
                  deleteHandler={deleteServiceHandler}
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.price}
                  stock={item.stock}
                  name={item.name}
                  category={item.category?.category}
                  imgSrc={item.images[0].url}
                />
              ))}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default AdminPanel;

const styles = StyleSheet.create({});
