import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { TextInput } from "react-native";
import Button from "../components/Button";
import Toast from "react-native-root-toast";
import api from "../../api";
import screens from "../../screens.json";
import TextField from "../components/TextField";
import Container from "../components/Container";

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
  send: "Enviar",
};

const CreateNotepadScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Adicionado isLoading

  const [coords, setCoords] = useState({
    latitude: undefined,
    longitude: undefined,
  });

  const latitude = coords.latitude;
  const longitude = coords.longitude;

  async function onSubmit() {
    setIsLoading(true); // Ativar isLoading durante a submissão

    try {
      const response = await api.post("/notepads", {
        title,
        subtitle,
        content,
        latitude,
        longitude,
      });

      Toast.show(textsCreateNotepad.submit);
      resetForm();
      navigation.navigate(screens.listNotepad);
    } catch (error) {
      console.error(error);
      // Lidar com erros de forma adequada
    } finally {
      setIsLoading(false); // Desativar isLoading após a conclusão da submissão
    }
  }

  function resetForm() {
    setTitle(initialNotepads.title);
    setSubTitle(initialNotepads.subtitle);
    setContent(initialNotepads.content);
  }

  function loadGeolocationParams() {
    const coords = route.params.coords;

    setCoords(coords);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadGeolocationParams();
    });
    return unsubscribe;
  }, [route.params]);

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
      {latitude && <TextField value={latitude.toString()} editable={false} />}
      {longitude && <TextField value={longitude.toString()} editable={false} />}
      <Button isLoading={isLoading} onPress={onSubmit}>
        {textsCreateNotepad.send}
      </Button>
    </Container>
  );
};

export default CreateNotepadScreen;
