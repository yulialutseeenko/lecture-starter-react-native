import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabsNavigator } from "./bottom-tabs-navigator";
import { RootStackParamList } from "../types";
import { useTheme } from "../hooks";
import { AddInspiration } from "../screens";
import { ROUTE_NAME } from "../enums";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.APP_BACKGROUND,
          },
          headerTintColor: theme.PRIMARY,
          headerTitleStyle: {
            fontFamily: "LobsterTwo-Regular",
            fontSize: 26,
            color: theme.PRIMARY,
          },
        }}
      >
        <Stack.Screen
          name={ROUTE_NAME.BOTTOM_TABS_NAVIGATOR}
          component={BottomTabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTE_NAME.ADD_INSPIRATION}
          component={AddInspiration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { RootNavigator };
