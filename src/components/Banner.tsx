import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

const textBanner = {
  title: "Charlie",
  titleTwo: "Pad",
};

const ContainerViewBanner = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Banner = () => {
  return (
    <ContainerViewBanner>
      <AntDesign style={styles.icon} name="book" size={24} color="black" />
      <Text style={styles.textTitle}>
        {textBanner.title}
        <Text style={styles.textTitleTwo}>{textBanner.titleTwo}</Text>{" "}
      </Text>
    </ContainerViewBanner>
  );
};

export default Banner;

const styles = StyleSheet.create({
  textTitle: {
    color: "#fff",
  },

  textTitleTwo: {
    color: "#f9004d",
  },

  icon: {
    // color: "#f9004d",
    backgroundColor: "#f9004d",
  },
});
