import { Button } from "react-native";
import { View, Text } from "react-native";
import screens from "../../screens.json";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Ver Notepads"
        onPress={() => {
          navigation.navigate(screens.listNotepad);
        }}
      />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
