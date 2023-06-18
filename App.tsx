import "react-native-gesture-handler";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Banner from "./src/components/Banner";
import { CreateNotepadScreen } from "./src/screens/CreatNotepadScreen";
import { EditNotepadScreen } from "./src/screens/CreatNotepadScreen";
import { HomeScreen } from "./src/screens/CreatNotepadScreen";
import { ListNotepadScreen } from "./src/screens/CreatNotepadScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Banner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
  },
});
