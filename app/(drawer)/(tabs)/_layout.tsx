import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./index";
import UploadScreen from "./upload";
import MixMatchScreen from "./mix-match";
import ProfileScreen from "./profile";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true, // Keep header for navigation
        tabBarStyle: { backgroundColor: "#fff", paddingBottom: 5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          title: "Upload Wardrobe",
          tabBarIcon: ({ color, size }) => <Ionicons name="cloud-upload" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="MixMatch"
        component={MixMatchScreen}
        options={{
          title: "Mix & Match",
          tabBarIcon: ({ color, size }) => <Ionicons name="color-filter" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
