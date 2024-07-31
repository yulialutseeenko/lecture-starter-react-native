import React, { ReactNode } from "react";
import { View, Image, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "../hooks";

type Props = {
  children: ReactNode;
};

const ScreenBackground: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.APP_BACKGROUND }]}>
      <Image source={require("../assets/leaf.png")} style={styles.leaf1} />
      <Image source={require("../assets/leaf.png")} style={styles.leaf2} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  leaf1: {
    position: "absolute",
    top: 35,
    left: 35,
    width: 200,
    height: 200,
    transform: [{ rotate: "180deg" }],
    zIndex: 0,
  },
  leaf2: {
    position: "absolute",
    bottom: 35,
    right: 35,
    width: 200,
    height: 200,
    zIndex: 0,
  },
});

export default ScreenBackground;
