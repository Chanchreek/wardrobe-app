import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabsLayout from "./(tabs)/_layout"; // Ensure correct path

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsLayout} />
    </Drawer.Navigator>
  );
}
