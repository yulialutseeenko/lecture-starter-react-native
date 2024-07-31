import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./contexts";
import { RootNavigator } from "./navigation/root-navigator";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "LobsterTwo-Italic": require("././assets/fonts/LobsterTwo-Italic.otf"),
    "LobsterTwo-Regular": require("././assets/fonts/LobsterTwo-Regular.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
    justifyContent: "center",
  },
});
