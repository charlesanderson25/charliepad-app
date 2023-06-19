import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import "react-native-gesture-handler";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Banner from "./src/components/Banner";
import CreateNotepadScreen from "./src/screens/CreatNotepadScreen";
import EditNotepadScreen from "./src/screens/EditNotepadScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ListNotepadScreen from "./src/screens/ListNotepadScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Banner />
      </SafeAreaView>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateNotepad" component={CreateNotepadScreen} />
        <Stack.Screen name="EditNotepad" component={EditNotepadScreen} />
        <Stack.Screen name="ListNotepad" component={ListNotepadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
  },
});
