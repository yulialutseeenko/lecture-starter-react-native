import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import ScreenBackground from "../ScreenBackground";
import { useState } from "react";
import { useTheme } from "../../hooks";
import * as ImagePicker from "expo-image-picker";
import { getRandomImage } from "../../services/getRandomImage";
import { getRandomQuote } from "../../services/getRandomQuote";
import { InspirationCard } from "../../components/inspiration-card/inspiration-card";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Inspiration, RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamListDasBoard } from "../../types/navigation.type";
import { ROUTE_NAME } from "../../enums";

const AddInspiration: React.FC = () => {
  const { theme } = useTheme();
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const navigation =
    useNavigation<
      StackNavigationProp<RootStackParamListDasBoard, "AddInspiration">
    >();

  const headerHeight = useHeaderHeight();

  const handleOnChangeQuote = (text: string) => {
    setQuote(text);
    checkIfSaveDisabled(text, image);
  };
  const checkIfSaveDisabled = (newQuote: string, newImage: string) => {
    setIsSaveDisabled(!newQuote || !newImage);
  };

  const pickImage = async (source: "gallery" | "camera") => {
    let permissionResult;
    if (source === "gallery") {
      permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
    } else {
      permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    }

    if (permissionResult.granted === false) {
      Alert.alert("Permission to access camera or gallery is required!");
      return;
    }

    let result;
    if (source === "gallery") {
      result = await ImagePicker.launchImageLibraryAsync();
    } else {
      result = await ImagePicker.launchCameraAsync();
    }

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      if (typeof imageUri === "string") {
        setImage(imageUri);
      }
      checkIfSaveDisabled(quote, imageUri);
    }
  };

  const handleChooseImage = async () => {
    Alert.alert("Select Image", "Choose an image from the following options:", [
      {
        text: "Gallery",
        onPress: async () => {
          pickImage("gallery");
        },
      },
      {
        text: "Camera",
        onPress: async () => {
          pickImage("camera");
        },
      },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const handleGetRandomImage = async () => {
    const { download_url } = await getRandomImage();
    setImage(download_url);
    checkIfSaveDisabled(quote, download_url);
  };

  const handleGetRandomQuote = async () => {
    const { quoteText } = await getRandomQuote();
    setQuote(quoteText);
    checkIfSaveDisabled(quoteText, image);
  };

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <InspirationCard item={{ quote, image_url: image }} />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleChooseImage}
            style={[styles.button, { borderColor: theme.PRIMARY }]}
          >
            <Text style={[styles.buttonSaveText, { color: theme.PRIMARY }]}>
              Choose image
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleGetRandomImage}
            style={[styles.button, { borderColor: theme.PRIMARY }]}
          >
            <Text style={[styles.buttonSaveText, { color: theme.PRIMARY }]}>
              Choose a random image
            </Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={[
            styles.quoteInput,
            {
              color:
                theme.NAME === "dark" ? theme.FONT_INVERSE : theme.FONT_MAIN,
              borderColor: theme.PRIMARY,
            },
          ]}
          placeholder="Enter your quote here..."
          placeholderTextColor={theme.SECONDARY}
          onChangeText={handleOnChangeQuote}
          value={quote}
        />

        <View style={styles.buttonsSaveQuoteContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleGetRandomQuote}
            style={[styles.button, { borderColor: theme.PRIMARY }]}
          >
            <Text style={[styles.buttonSaveText, { color: theme.PRIMARY }]}>
              Get a random quote
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.button,
              {
                borderColor: theme.PRIMARY,
                opacity: isSaveDisabled ? 0.5 : 1,
                backgroundColor: theme.PRIMARY,
              },
            ]}
            disabled={isSaveDisabled}
            onPress={() => {
              const newInspiration: Inspiration = { image_url: image, quote };
              navigation.navigate(ROUTE_NAME.DASHBOARD, { newInspiration });
            }}
          >
            <Text
              style={[styles.buttonSaveText, { color: theme.APP_BACKGROUND }]}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    zIndex: 5,
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 120,
    height: 50,
    justifyContent: "center",
  },
  buttonSaveText: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "LobsterTwo-Regular",
  },
  randomImageButton: {
    zIndex: 2,
  },
  chooseImageButton: {
    zIndex: 2,
  },
  quoteInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    zIndex: 10,
    height: 100,
  },
  container: {
    padding: 10,
    alignSelf: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 20,
  },
  buttonsSaveQuoteContainer: {
    gap: 20,
    marginTop: 20,
  },
  imageContainer: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 220,
  },
});

export { AddInspiration };
