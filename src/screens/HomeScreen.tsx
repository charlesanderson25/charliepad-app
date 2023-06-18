import { Button } from "react-native";
import { View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Ver Notepads"
        onPress={() => {
          navigation.navigate("ListNotepad");
        }}
      />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
