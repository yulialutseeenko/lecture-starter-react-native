import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import ScreenBackground from "../ScreenBackground";
import { useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useTheme } from "../../hooks";
import { InspirationCard } from "../../components/inspiration-card/inspiration-card";
import { Inspiration } from "../../types";
import { RootStackParamListDasBoard } from "../../types/navigation.type";

type DashboardRouteProps = RouteProp<RootStackParamListDasBoard, "Dashboard">;

const Dashboard: React.FC = () => {
  const route = useRoute<DashboardRouteProps>();
  const { theme } = useTheme();
  const [inspirations, setInspirations] = useState<Inspiration[]>([]);

  useEffect(() => {
    const newInspiration = route.params?.newInspiration;
    if (newInspiration) {
      setInspirations((prevInspirations) => [
        newInspiration,
        ...prevInspirations,
      ]);
    }
  }, [route.params?.newInspiration]);

  const renderItem = ({ item }: { item: Inspiration }) => (
    <View style={styles.listItem}>
      <InspirationCard
        item={{
          quote: item.quote,
          image_url: item.image_url,
        }}
      />
    </View>
  );

  return (
    <ScreenBackground>
      {inspirations.length === 0 ? (
        <View style={styles.placeholderContainer}>
          <Image
            source={require("../../assets/empty-placeholder.png")}
            style={styles.placeholderImage}
          />
          <Text
            style={[
              styles.placeholderText,
              { fontFamily: "LobsterTwo-Italic", color: theme.SECONDARY },
            ]}
          >
            No inspirations yet
          </Text>
        </View>
      ) : (
        <View style={styles.list}>
          <FlatList
            data={inspirations}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </ScreenBackground>
  );
};

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 26,
    marginTop: 10,
    zIndex: 2,
  },
  placeholderImage: {
    width: 250,
    height: 250,
    zIndex: 2,
  },
  listItem: {
    margin: 10,
  },
  list: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});

export { Dashboard };
