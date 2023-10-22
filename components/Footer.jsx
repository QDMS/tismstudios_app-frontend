import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Linking,
} from "react-native";
import { colors } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { Avatar, IconButton } from "react-native-paper";

const Footer = ({ activeRoute = "home" }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [showFooter, setShowFooter] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigation();

  const avatarOptions = {
    color: colors.color2,
    style: {
      backgroundColor: colors.color4,
    },
    size: 50,
  };

  const loading = false;
  const isAuthenticated = false;

  const navigationHandler = (key) => {
    switch (key) {
      case 0:
        navigate.navigate("home");
        break;
      case 1:
        navigate.navigate("cart");
        break;
      case 2:
        if (isAuthenticated) navigate.navigate("profile");
        else navigate.navigate("login");
        break;
      default:
        navigate.navigate("home");
        break;
    }
  };

  const toggleFooter = () => {
    const toValue = showFooter ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    setShowFooter(!showFooter);
  };

  const footerStyle = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    ],
    opacity: animation,
  };

  return (
    <View
      style={{
        height: 90,
        backgroundColor: colors.color2,
      }}
    >
      {/* Main content here */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        <TouchableOpacity onPress={toggleFooter}>
          <View style={{ bottom: 25 }}>
            <Avatar.Icon
              icon={showFooter ? "chevron-right-circle" : "chevron-left-circle"}
              color={colors.color1}
              style={{ backgroundColor: colors.color4 }}
            />
          </View>

          {/* <Text style={{ paddingHorizontal: 30 }}>Press Here</Text> */}
        </TouchableOpacity>
        <Text style={{ marginTop: -10, fontSize: 24, alignSelf: "center" }}>
          App Created By:{" "}
          <Text
            style={{ color: colors.color1_light2, fontWeight: "bold" }}
            onPress={() => Linking.openURL("https://qujuan.net")}
          >
            Qujuan Miller
          </Text>
        </Text>
      </View>

      <Animated.View style={[styles.footer, footerStyle]}>
        {/* Footer content */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigationHandler(1)}
        >
          <Avatar.Icon
            {...avatarOptions}
            icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigationHandler(2)}
        >
          <Avatar.Icon
            {...avatarOptions}
            icon={
              isAuthenticated === false
                ? "login"
                : activeRoute === "profile"
                ? "account"
                : "account-outline"
            }
          />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            backgroundColor: colors.color2,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            top: -50,
            right: 165,
            left: 165,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigationHandler(0)}
            >
              <Avatar.Icon
                color={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                }}
                size={50}
                icon={activeRoute === "home" ? "home" : "home-outline"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = {
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    backgroundColor: colors.color1,
    alignItems: "center",
    borderTopRightRadius: 120,
    borderTopLeftRadius: 120,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
};

export default Footer;
