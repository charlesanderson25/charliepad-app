import styled from "styled-components/native";
import { TextInput } from "react-native";
import Button from "../components/Button";
import Toast from "react-native-root-toast";
import { useState } from "react";
import api from "../../api";
import screens from "../../screens.json";

const initialNotepads = {
  title: "",
  subtitle: "",
  content: "",
};

const textsCreateNotepad = {
  titleText: "Digite o Título",
  subtitleText: "Digite o Subtítulo",
  contentText: "Digite o conteúdo",
  submit: "Notepad criado com sucesso!",
};

const Container = styled.View`
  margin: 14px;
  gap: 8px;
`;

const TextField = styled.TextInput`
  border-radius: 8px;
  background-color: white;
  padding: 8px;
  border-width: 1px;
`;

const CreateNotepadScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");

  async function onSubmit() {
    const response = await api.post("/notepads", {
      title,
      subtitle,
      content,
    });

    Toast.show(textsCreateNotepad.submit);
    resetForm();
    navigation.navigate(screens.listNotepad);
  }

  function resetForm() {
    setTitle(initialNotepads.title);
    setSubTitle(initialNotepads.subtitle);
    setContent(initialNotepads.content);
  }

  return (
    <Container>
      <TextField
        placeholder={textsCreateNotepad.titleText}
        onChangeText={setTitle}
        value={title}
      />
      <TextField
        placeholder={textsCreateNotepad.subtitleText}
        onChangeText={setSubTitle}
        value={subtitle}
      />
      <TextField
        placeholder={textsCreateNotepad.contentText}
        multiline
        numberOfLines={6}
        onChangeText={setContent}
        value={content}
      />
      <Button onPress={onSubmit}>Enviar</Button>
    </Container>
  );
};

export default CreateNotepadScreen;
