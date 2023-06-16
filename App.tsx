import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Alert,
  TextInput,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Banner from "./src/components/Banner";

const text = {
  test: "Olá, Mundo!",
  buttonTest: "Button Test",
  input: "Informe seu texto",
};

export default function App() {
  const onPressButton = function onPress(alerta: any) {
    Alert.alert("Fui clicado!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Banner />
      <ActivityIndicator />
      <Text>{text.test}</Text>
      <Button onPress={onPressButton} title={text.buttonTest} />
      <TextInput value={text.input} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
