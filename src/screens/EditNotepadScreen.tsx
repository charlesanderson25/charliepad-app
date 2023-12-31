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
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isSubtitbleFocused, setIsSubtitleFocused] = useState(false);
  const [isContentFocused, setIsContentFocused] = useState(false);
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
      <TextField
        value={title}
        onChangeText={setTitle}
        isFocused={isTitleFocused}
        onFocus={() => setIsTitleFocused(true)}
        onBlur={() => setIsTitleFocused(false)}
      />
      <TextField
        value={subtitle}
        onChangeText={setSubtitle}
        isFocused={isSubtitbleFocused}
        onFocus={() => setIsSubtitleFocused(true)}
        onBlur={() => setIsSubtitleFocused(false)}
      />
      <TextField
        value={content}
        onChangeText={setContent}
        isFocused={isContentFocused}
        onFocus={() => setIsContentFocused(true)}
        onBlur={() => setIsContentFocused(false)}
      />
      <Button isLoading={isLoading} onPress={onSubmit}>
        {textsEditNotepad.submitButton}
      </Button>
    </Container>
  );
};

export default EditNotepadScreen;
