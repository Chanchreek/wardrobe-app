import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

type DrawerNavProp = DrawerNavigationProp<{}>; // Fix: TypeScript knows it's a Drawer

export default function HomeScreen() {
  const navigation = useNavigation<DrawerNavProp>(); // Fix: Ensures 'openDrawer' exists

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Drawer Menu Button */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>

      <Text style={{ fontSize: 24, marginTop: 20 }}>Welcome to Your Wardrobe</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upload Wardrobe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mix & Match</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  button: {
    marginTop: 20,
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
};
