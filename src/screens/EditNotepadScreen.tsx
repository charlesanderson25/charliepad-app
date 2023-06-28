import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import api from "../../api";
import TextField from "../components/TextField";
import Container from "../components/Container";
import Button from "../components/Button";
import Toast from "react-native-root-toast";

const textsEditNotepad = {
  submitButton: "Atualizar",
  updateNotepadSucess: "O notepad foi atulizado com sucesso!",
};

const EditNotepadScreen = ({ navigation, route }) => {
  const notepadId = route.params.id;
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");

  async function loadNotepads() {
    const response = await api.get(`/notepads/${notepadId}`);
    const notepad = response.data;
    setTitle(notepad.title);
    setSubtitle(notepad.subtitle);
    setContent(notepad.content);
  }

  async function onSubmit() {
    const response = await api.patch(`/notepads/${notepadId}`, {
      title,
      subtitle,
      content,
    });
    Toast.show(textsEditNotepad.updateNotepadSucess);
    navigation.goBack();
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadNotepads();
    });
    return unsubscribe;
  }, [notepadId]);

  return (
    <Container>
      <TextField value={title} onChangeText={setTitle} />
      <TextField value={subtitle} onChangeText={setSubtitle} />
      <TextField value={content} onChangeText={setContent} />
      <Button onPress={onSubmit}>{textsEditNotepad.submitButton}</Button>
    </Container>
  );
};

export default EditNotepadScreen;
