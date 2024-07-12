import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabsNavigator } from "./bottom-tabs-navigator";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    const insets = useSafeAreaInsets();

	return (
		<SafeAreaView style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
			<StatusBar />
			<NavigationContainer>
				<>
					{/* Replace with navigator */}
				</>
			</NavigationContainer>
		</SafeAreaView>
	);
};

export { RootNavigator };
