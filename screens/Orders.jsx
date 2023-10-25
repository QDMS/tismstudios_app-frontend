import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyles, headingText } from "../styles/styles";
import Header from "../components/Header";
import SpinningTS from "../components/SpinningTS";
import RotatingStarLoader from "../components/RotatingStarLoader";
import { Headline } from "react-native-paper";
import OrderItems from "../components/OrderItems";
import { useGetOrders } from "../utils/hooks";
import { useIsFocused } from "@react-navigation/native";


const Orders = () => {
  const isFocused = useIsFocused();
  const { loading, orders } = useGetOrders(isFocused);

  return (
    <View style={{ ...defaultStyles, backgroundColor: colors.color5 }}>
      <Header back={true} />
      {/* Heading */}
      <View
        style={{
          marginBottom: 20,
          paddingTop: 30,
        }}
      >
        <Text style={{ fontSize: 25, alignSelf: "center", marginBottom: 20 }}>
          <SpinningTS />
        </Text>
        <Text style={headingText}>Orders</Text>
      </View>
      {loading ? (
        <RotatingStarLoader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItems
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  phone={`${item.shippingInfo.phone}`}
                  orderedOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city} ${item.shippingInfo.usState}, ${item.shippingInfo.zipCode}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center", color: colors.color1 }}>
                No Orders Yet... Please Make A Order Now{" "}
              </Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
