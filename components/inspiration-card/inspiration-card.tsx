import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useTheme } from "../../hooks";
import React from "react";
import { BlurView } from "expo-blur";
import { Inspiration } from "../../types";

type Props = {
  item: Inspiration;
};

export const InspirationCard: React.FC<Props> = ({ item }) => {
  const { theme } = useTheme();

  const imageSource = item.image_url
    ? { uri: item.image_url }
    : require("../../assets/no-image.jpg");

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={imageSource}>
        <BlurView style={styles.blurContainer} intensity={30} tint="dark">
          <View
            style={[
              styles.overlay,
              { backgroundColor: `${theme.APP_BACKGROUND}4D` },
            ]}
          >
            {item.quote && (
              <View style={styles.quoteContainer}>
                <Text style={[styles.quote, { color: theme.FONT_INVERSE }]}>
                  {item.quote}
                </Text>
              </View>
            )}
          </View>
        </BlurView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    width: "100%",
    height: 220,
    zIndex: 5,
  },
  imageBackground: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    minWidth: 300,
  },
  blurContainer: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  quoteContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    borderRadius: 10,
    minHeight: "50%",
    width: "80%",
    maxWidth: 300,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  quote: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "LobsterTwo-Regular",
  },
});
