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

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StatusBar />
        <Banner />

        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerLabel: "Home",
              drawerIcon({ color, focused, size }) {
                return <Ionicons name="home" size={size} color={color} />;
              },
            }}
          />
          <Drawer.Screen
            name="CreateNotepad"
            component={CreateNotepadScreen}
            options={{
              drawerLabel: "Criar Notepad",
              drawerIcon({ color, focused, size }) {
                return <Ionicons name="create" size={size} color={color} />;
              },
            }}
          />
          <Drawer.Screen
            name="EditNotepad"
            component={EditNotepadScreen}
            options={{
              drawerLabel: "Editar Notepad",
              drawerIcon({ color, focused, size }) {
                return <Entypo name="edit" size={size} color={color} />;
              },
            }}
          />
          <Drawer.Screen
            name="ListNotepad"
            component={ListNotepadScreen}
            options={{
              drawerLabel: "Listar Notepad",
              drawerIcon({ color, focused, size }) {
                return (
                  <FontAwesome5 name="list-ul" size={size} color={color} />
                );
              },
            }}
          />
          <Drawer.Screen
            name="ViewNotepad"
            component={ViewNotepadScreen}
            options={{
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
