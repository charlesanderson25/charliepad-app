import { Text } from "react-native";
import { View } from "react-native";
import { useEffect, useState } from "react";
import api from "../../api";

const initialNotepads = {
  count: 0,
  notepads: [],
};

const ListNotepadScreen = ({ navigation, route }) => {
  const [notepadList, setNotepadList] = useState(initialNotepads);

  async function loadNotepads() {
    const response = await api.get("/notepads");
    setNotepadList(response.data);
  }

  useEffect(() => {
    const unsubscribe = navigation.adListenner("focus", () => {});

    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>ListNotepadScreen</Text>
    </View>
  );
};

export default ListNotepadScreen;
