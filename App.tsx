import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import "react-native-gesture-handler";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Banner from "./src/components/Banner";
import CreateNotepadScreen from "./src/screens/CreatNotepadScreen";
import EditNotepadScreen from "./src/screens/EditNotepadScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ListNotepadScreen from "./src/screens/ListNotepadScreen";
import ViewNotepadScreen from "./src/screens/ViewNotepadScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import screens from "./screens.json";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StatusBar />
        <Banner />

        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name={screens.home}
            component={HomeScreen}
            options={{
              drawerLabel: "Home",
              drawerIcon({ color, focused, size }) {
                return <Ionicons name="home" size={size} color={color} />;
              },
            }}
          />
          <Drawer.Screen
            name={screens.createNotepad}
            component={CreateNotepadScreen}
            options={{
              headerTitle: "Criar Notepad",
              drawerLabel: "Criar Notepad",
              drawerIcon({ color, focused, size }) {
                return <Ionicons name="create" size={size} color={color} />;
              },
            }}
          />
          <Drawer.Screen
            name={screens.editNotepad}
            component={EditNotepadScreen}
            options={{
              headerTitle: "Editar Notepad",
              drawerLabel: "Editar Notepad",
              drawerIcon({ color, focused, size }) {
                return <Entypo name="edit" size={size} color={color} />;
              },
            }}
          />
          <Drawer.Screen
            name={screens.listNotepad}
            component={ListNotepadScreen}
            options={{
              headerTitle: "Listar Notepads",
              drawerLabel: "Listar Notepads",
              drawerIcon({ color, focused, size }) {
                return (
                  <FontAwesome5 name="list-ul" size={size} color={color} />
                );
              },
            }}
          />
          <Drawer.Screen
            name={screens.viewNotepad}
            component={ViewNotepadScreen}
            options={{
              headerTitle: "Ver Notepad",
              drawerLabel: "Ver Notepad",
              drawerIcon({ color, focused, size }) {
                return <FontAwesome5 name="search" size={size} color={color} />;
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
  },
});
