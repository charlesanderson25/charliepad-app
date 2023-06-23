import { View } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  // /* font-family: JosefinSans-Regular; */
`;

const SubTitle = styled.Text`
  font-size: 14px;
  color: #444;
`;

const Container = styled.View`
  padding-horizontal: 10px;
  padding-vertical: 8px;
  border-bottom-width: 1px;
  border-bottom-color: #aaa;
`;

const NotepadItem = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};

export default NotepadItem;
