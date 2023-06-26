import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import Toast from "react-native-root-toast";
import api from "../../api";
import CardPad from "../components/CardPad";
import Title from "../components/Title";
import SubTitle from "../components/Subtitle";

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
    <CardPad>
      <Text>#{notepad.id}</Text>
      <Text>{transformCreatedAt}</Text>
      <Title>{notepad.title}</Title>
      <SubTitle>{notepad.subtitle}</SubTitle>
      <Text>{notepad.content}</Text>
    </CardPad>
  );
};

export default ViewNotepadScreen;
