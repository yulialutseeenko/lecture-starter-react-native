import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RootNavigator } from "./navigation";
import { ThemeProvider } from "./contexts";

export default function App() {
	return (
		<SafeAreaProvider style={styles.container}>
			<ThemeProvider>
				<RootNavigator />
			</ThemeProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
