import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Title from "./Title";
import SubTitle from "./Subtitle";

const Container = styled.View`
  padding-horizontal: 10px;
  padding-vertical: 8px;
  border-bottom-width: 1px;
  border-bottom-color: #aaa;
`;

const NotepadItem = ({ title, subtitle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Container>
    </TouchableOpacity>
  );
};

export default NotepadItem;
