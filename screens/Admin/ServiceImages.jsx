import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors, defaultStyles, headingText } from "../../styles/styles";
import Header from "../../components/Header";
import SpinningTS from "../../components/SpinningTS";
import ImageCard from "../../components/ImageCard";
import { Avatar, Button } from "react-native-paper";
import { useMessageAndErrorFromOther } from "../../utils/hooks";
import { useDispatch } from "react-redux";
import { getType } from "mime";
import {
  deleteServiceImage,
  updateServiceImage,
} from "../../redux/actions/otherActions";

const ServiceImages = ({ navigation, route }) => {
  const [images] = useState(route.params.images);
  const [serviceId] = useState(route.params.id);
  const [image, setImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  const dispatch = useDispatch();

  const loading = useMessageAndErrorFromOther(
    dispatch,
    navigation,
    "adminPanel"
  );

  const deleteHandler = (imageId) => {
    dispatch(deleteServiceImage(serviceId, imageId));
  };

  const submitHandler = () => {
    const myForm = new FormData();

    myForm.append("file", {
      uri: image,
      type: getType(image),
      name: image.split("/").pop(),
    });

    dispatch(updateServiceImage(serviceId, myForm));
  };

  useEffect(() => {
    if (route.params?.image) {
      setImage(route.params.image);
      setImageChanged(true);
    }
  }, [route.params]);

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
        <Text style={headingText}>Add Images</Text>
      </View>
      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 40,
            minHeight: 400,
          }}
        >
          {images.map((i) => (
            <ImageCard
              key={i._id}
              src={i.url}
              id={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <Image
          style={{
            backgroundColor: colors.color2,
            width: 100,
            height: 100,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={{ uri: image }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("camera", { updateService: true })
            }
          >
            <Avatar.Icon
              icon={"camera"}
              size={50}
              color={colors.color3}
              style={{
                backgroundColor: colors.color2,
                margin: 10,
                // bottom: 15,
                // left: -35,
              }}
            />
          </TouchableOpacity>
        </View>
        <Button
          style={{
            backgroundColor: colors.color1,
            padding: 6,
          }}
          textColor={colors.color2}
          loading={loading}
          onPress={submitHandler}
          disabled={!imageChanged}
        >
          ADD
        </Button>
      </View>
    </View>
  );
};

export default ServiceImages;

const styles = StyleSheet.create({});
