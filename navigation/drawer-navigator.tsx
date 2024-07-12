import { createDrawerNavigator } from "@react-navigation/drawer";

import { Dashboard, Settings } from '../screens';
import { Text } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        // Add Drawer.Navigator here
        <Text>Hello world!!!</Text>
    )
}

export { DrawerNavigator };