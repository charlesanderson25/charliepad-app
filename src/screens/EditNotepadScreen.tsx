import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import api from "../../api";

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

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    return unsubscribe;
  }, [notepadId]);

  return (
    <View>
      <Text>EditNotepadScreen {notepadId}</Text>
    </View>
  );
};

export default EditNotepadScreen;
