import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import { DrawerNavigator } from "./drawer-navigator";

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
