import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Banner = () => {
  return (
    <View>
      <AntDesign name="book" size={24} color="black" />
      <Text>Icone</Text>
    </View>
  );
};

export default Banner;
