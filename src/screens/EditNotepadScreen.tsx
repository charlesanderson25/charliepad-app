import { Text } from "react-native";
import { View } from "react-native";

const EditNotepadScreen = ({ navigation, route }) => {
  const notepadId = route.params.id;

  return (
    <View>
      <Text>EditNotepadScreen {notepadId}</Text>
    </View>
  );
};

export default EditNotepadScreen;
