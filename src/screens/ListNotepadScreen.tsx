import { Text } from "react-native";
import { View } from "react-native";
import { useEffect, useState } from "react";
import api from "../../api";
import { FlatList } from "react-native-gesture-handler";
import NotepadItem from "../components/NotepadItem";
import CardPad from "../components/CardPad";

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
    const unsubscribe = navigation.addListener("focus", () => {
      loadNotepads();
    });

    return unsubscribe;
  }, []);

  return (
    <CardPad>
      <FlatList
        data={notepadList.notepads}
        renderItem={({ item }) => {
          return <NotepadItem {...item} />;
        }}
      />
    </CardPad>
  );
};

export default ListNotepadScreen;
