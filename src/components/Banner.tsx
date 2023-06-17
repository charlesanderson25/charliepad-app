import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const textBanner = {
  title: "Charlie",
  titleTwo: "Pad",
};

const Banner = () => {
  return (
    <View style={styles.containerViewBanner}>
      <AntDesign style={styles.icon} name="book" size={24} color="black" />
      <Text style={styles.textTitle}>
        {textBanner.title}
        <Text style={styles.textTitleTwo}>{textBanner.titleTwo}</Text>{" "}
      </Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  containerViewBanner: {
    flex: 1,
    flexDirection: "row",
  },

  icon: {
    backgroundColor: "#f9004d",
  },

  textTitle: {
    color: "#fff",
  },

  textTitleTwo: {
    color: "#f9004d",
  },
});
