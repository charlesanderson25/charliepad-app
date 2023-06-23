import { View, Text } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  // /* font-family: JosefinSans-Regular; */
`;

const NotepadItem = ({ title }) => {
  return <Title>{title}</Title>;
};

export default NotepadItem;
