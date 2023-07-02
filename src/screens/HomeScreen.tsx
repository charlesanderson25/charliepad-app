import { Button } from "react-native";
import { View, Text } from "react-native";
import screens from "../../screens.json";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
      />
    </View>
  );
};

export default HomeScreen;
