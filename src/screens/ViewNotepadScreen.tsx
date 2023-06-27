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
import screens from "../../screens.json";

const textsViewNotepads = {
  editButtonLabel: "Editar",
  deleteButtonLabel: "Deletar",
  deleteSucess: "O notepad foi deletado com sucesso",
  editSucess: "O notepad foi editado com sucesso",
};

const ContainerCard = styled(CardPad)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DeleteButton = styled(Button)`
  background-color: #f9004d;
`;

const EditButton = styled(Button)`
  background-color: #d35400;
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

  async function onEdit() {
    // const response = await api.patch(`/notepads/${notepadId}`);
    // Toast.show(textsViewNotepads.editSucess);
    navigation.navigate(screens.editNotepad, {
      id: notepadId,
    });
  }

  async function onDelete() {
    const response = await api.delete(`/notepads/${notepadId}`);
    Toast.show(textsViewNotepads.deleteSucess);
    navigation.navigate(screens.listNotepad);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});

    loadNotepads();

    return unsubscribe;
  }, [notepadId]);

  return (
    <ContainerCard>
      <Text>#{notepad.id}</Text>
      <Text>{transformCreatedAt}</Text>
      <Title>{notepad.title}</Title>
      <SubTitle>{notepad.subtitle}</SubTitle>
      <Content>{notepad.content}</Content>
      <EditButton onPress={onEdit}>
        {textsViewNotepads.editButtonLabel}
      </EditButton>
      <DeleteButton onPress={onDelete}>
        {textsViewNotepads.deleteButtonLabel}
      </DeleteButton>
    </ContainerCard>
  );
};

export default ViewNotepadScreen;
