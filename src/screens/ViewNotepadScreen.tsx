import { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import Toast from "react-native-root-toast";
import api from "../../api";

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
    <View>
      <Text>{notepad.id}</Text>
      <Text>{notepad.created_at}</Text>
      <Text>{notepad.title}</Text>
      <Text>{notepad.subtitle}</Text>
      <Text>{notepad.content}</Text>
    </View>
  );
};

export default ViewNotepadScreen;
