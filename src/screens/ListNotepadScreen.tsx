import { useEffect, useState } from "react";
import api from "../../api";
import { FlatList } from "react-native-gesture-handler";
import NotepadItem from "../components/NotepadItem";
import CardPad from "../components/CardPad";
import Toast from "react-native-root-toast";
import screens from "../../screens.json";

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

  function onPressNotepadItem({ id }) {
    navigation.navigate(screens.viewNotepad, {
      id,
    });
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
          return (
            <NotepadItem {...item} onPress={() => onPressNotepadItem(item)} />
          );
        }}
      />
    </CardPad>
  );
};

export default ListNotepadScreen;
