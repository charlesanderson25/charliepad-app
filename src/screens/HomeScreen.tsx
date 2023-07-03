import { View, Text } from "react-native";
import screens from "../../screens.json";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE, MapMarker } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import Toast from "react-native-root-toast";
import api from "../../api";

const initialNotepads = {
  count: 0,
  notepads: [],
};

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
  const [notepadList, setNotepadList] = useState(initialNotepads);

  const region = {
    ...cordinate,
    latitudeDelta: delta,
    longitudeDelta: delta,
  };

  const notepadsInMap = notepadList.notepads.filter(
    (notepad) =>
      notepad.latitude !== undefined && notepad.longitude !== undefined
  );

  async function loadNotepads() {
    const response = await api.get("/notepads", {
      params: {
        limit: Infinity,
      },
    });
    setNotepadList(response.data);
  }

  async function loadGeoLocation() {
    const response = await Location.requestForegroundPermissionsAsync();
    const position = await Location.getCurrentPositionAsync();
    setCordinate(position.coords);
    // console.log(position);
  }

  function onMarkerPress(notepad) {
    navigation.navigate(screens.viewNotepad, { id: notepad.id });
  }

  useEffect(() => {
    loadGeoLocation();
    const unsubscribe = navigation.addListener("focus", () => {
      loadNotepads();
    });

    return unsubscribe;
  }, []);

  const notepadsMarkers = notepadsInMap.map((notepad) => (
    <MapMarker
      key={notepad.id}
      coordinate={notepad}
      onPress={() => onMarkerPress(notepad)}
    />
  ));

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        region={region}
        showsUserLocation={true}
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        onLongPress={(event) => {
          const coords = event.nativeEvent.coordinate;
          navigation.navigate(screens.createNotepad, coords);
        }}
      >
        {notepadsMarkers}
      </MapView>
    </View>
  );
};

export default HomeScreen;
