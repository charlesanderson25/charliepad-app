import { Button } from "react-native";
import { View, Text } from "react-native";
import screens from "../../screens.json";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import Toast from "react-native-root-toast";

const delta = 0.05;

const textsHomeScreen = {
  geolocationError:
    "Você deve fornecer a permissão de localização para utilizar esse aplicativo",
};

const initialCordinate = {
  latitude: 0,
  longitude: 0,
};

const HomeScreen = ({ navigation }) => {
  const [cordinate, setCordinate] = useState(initialCordinate);
  const region = {
    ...cordinate,
    latitudeDelta: delta,
    longitudeDelta: delta,
  };

  async function loadGeoLocation() {
    const response = await Location.requestForegroundPermissionsAsync();
    const position = await Location.getCurrentPositionAsync();
    setCordinate(position.coords);
    console.log(position);
  }

  useEffect(() => {
    loadGeoLocation();
  }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        region={region}
        showsUserLocation={true}
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
      />
    </View>
  );
};

export default HomeScreen;
