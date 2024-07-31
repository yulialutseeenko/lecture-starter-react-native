import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Dashboard, Settings } from "../screens";
import { useTheme } from "../hooks";
import { ROUTE_NAME } from "../enums";

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  const { theme } = useTheme();

  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: "home" | "settings" = "home";

          if (route.name === ROUTE_NAME.DASHBOARD) {
          } else if (route.name === ROUTE_NAME.SETTINGS) {
            iconName = "settings";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.PRIMARY,
        tabBarInactiveTintColor: theme.SECONDARY,
        tabBarStyle: { backgroundColor: theme.APP_BACKGROUND },
        headerStyle: { backgroundColor: theme.APP_BACKGROUND },
        headerTintColor: theme.PRIMARY,
        headerTitleStyle: { fontFamily: "LobsterTwo-Regular" },
      })}
    >
      <BottomTabs.Screen
        name={ROUTE_NAME.DASHBOARD}
        component={Dashboard}
        options={({ navigation }) => ({
          headerRight: () => (
            <Ionicons
              name="add-circle"
              color={theme.PRIMARY}
              size={40}
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate(ROUTE_NAME.ADD_INSPIRATION)}
            />
          ),
          tabBarLabel: "Home",
          title: "Find Your Inspiration",
          headerTitleStyle: {
            fontSize: 26,
            fontFamily: "LobsterTwo-Regular",
            color: theme.PRIMARY,
          },
          tabBarLabelStyle: { fontSize: 16 },
        })}
      />
      <BottomTabs.Screen
        name={ROUTE_NAME.SETTINGS}
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarLabelStyle: { fontSize: 16 },
          headerTitleStyle: {
            fontFamily: "LobsterTwo-Regular",
            color: theme.PRIMARY,
            fontSize: 26,
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export { BottomTabsNavigator };
