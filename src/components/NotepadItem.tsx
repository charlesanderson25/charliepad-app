import { View, Text } from "react-native";
import styled from "styled-components/native";

const Title = styled.View`
  font-size: 20px;
  font-weight: bold;
  /* font-family: JosefinSans-Regular; */
`;

const NotepadItem = ({ title }) => {
  return <Text>{title}</Text>;
};
