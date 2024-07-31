import { Switch, Text, View, StyleSheet } from "react-native";
import ScreenBackground from "../ScreenBackground";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../hooks";
import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { THEME_STORAGE_KEY } from "../../constants/config";

const Settings: React.FC = () => {
  const { theme } = useTheme();
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <View style={styles.switchContainer}>
          <Ionicons
            name="sunny"
            size={50}
            color={theme.NAME === "dark" ? theme.GREY : theme.PRIMARY}
            style={styles.icon}
          />
          <Switch
            trackColor={{ false: theme.GREY, true: theme.SECONDARY }}
            thumbColor={theme.PRIMARY}
            onValueChange={toggleTheme}
            style={{ transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }] }}
            value={theme.NAME === "dark"}
          />
          <Ionicons
            name="moon"
            size={50}
            color={theme.NAME === "light" ? theme.GREY : theme.PRIMARY}
            style={styles.icon}
          />
        </View>
      </View>
    </ScreenBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 20,
  },
});

export { Settings };
