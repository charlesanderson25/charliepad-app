import styled from "styled-components/native";
import { TextInput } from "react-native";
import Button from "../components/Button";
import Toast from "react-native-root-toast";
import { useState } from "react";

const initialNotepads = {
  title: "",
  subtitle: "",
  content: "",
};

const textsCreateNotepad = {
  titleText: "Digite o Título",
  subtitleText: "Digite o Subtítulo",
  contentText: "Digite o conteúdo",
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

const CreateNotepadScreen = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Container>
      <TextField
        placeholder={textsCreateNotepad.titleText}
        onChangeText={setTitle}
      />
      <TextField
        placeholder={textsCreateNotepad.subtitleText}
        onChangeText={setSubTitle}
      />
      <TextField
        placeholder={textsCreateNotepad.contentText}
        multiline
        numberOfLines={6}
        onChangeText={setContent}
      />
      <Button
        onPress={() => {
          Toast.show("Fui clicado");
        }}
      >
        Enviar
      </Button>
    </Container>
  );
};

export default CreateNotepadScreen;
