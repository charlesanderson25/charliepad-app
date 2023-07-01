import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import api from "../../api";
import TextField from "../components/TextField";
import Container from "../components/Container";
import Button from "../components/Button";
import Toast from "react-native-root-toast";
import { useGlobalState } from "../../useGlobalState";

const textsEditNotepad = {
  submitButton: "Atualizar",
  updateNotepadSucess: "O notepad foi atulizado com sucesso!",
};

interface Notepad {
  title: string;
  subtitle: string;
  content: string;
}

const EditNotepadScreen = ({ navigation, route }) => {
  const notepadId = route.params.id;
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const isLoading: boolean = useGlobalState(
    (state: { isLoading: boolean }) => state.isLoading
  );

  async function loadNotepads() {
    const response = await api.get(`/notepads/${notepadId}`);
    const notepad: Notepad = response.data;
    setTitle(notepad.title);
    setSubtitle(notepad.subtitle);
    setContent(notepad.content);
  }

  async function onSubmit() {
    const notepadProps = {
      title,
      subtitle,
      content,
    };
    const response = await api.patch(`/notepads/${notepadId}`, notepadProps);
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
      <Button isLoading={isLoading} onPress={onSubmit}>
        {textsEditNotepad.submitButton}
      </Button>
    </Container>
  );
};

export default EditNotepadScreen;
