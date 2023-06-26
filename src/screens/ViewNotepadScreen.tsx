import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import Toast from "react-native-root-toast";
import api from "../../api";
import CardPad from "../components/CardPad";
import Title from "../components/Title";
import SubTitle from "../components/Subtitle";
import Content from "../components/Content";
import styled from "styled-components/native";
import Button from "../components/Button";

const textsViewNotepads = {
  editButtonLabel: "Editar",
  deleteButtonLabel: "Deletar",
};

const ContainerCard = styled(CardPad)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const initialNotepads = {
  id: "",
  title: "",
  subtitle: "",
  content: "",
  created_at: "",
};

const ViewNotepadScreen = ({ navigation, route }) => {
  const notepadId = route.params.id;
  const [notepad, setNotepad] = useState(initialNotepads);
  const transformCreatedAt = new Date(notepad.created_at).toLocaleDateString();

  async function loadNotepads() {
    const response = await api.get(`/notepads/${notepadId}`);
    setNotepad(response.data);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});

    loadNotepads();

    return unsubscribe;
  }, [notepadId]);

  return (
    <ContainerCard>
      <Button onPress={}>{textsViewNotepads.editButtonLabel}</Button>
      <Button onPress={}>{textsViewNotepads.deleteButtonLabel}</Button>
      <Text>#{notepad.id}</Text>
      <Text>{transformCreatedAt}</Text>
      <Title>{notepad.title}</Title>
      <SubTitle>{notepad.subtitle}</SubTitle>
      <Content>{notepad.content}</Content>
    </ContainerCard>
  );
};

export default ViewNotepadScreen;
