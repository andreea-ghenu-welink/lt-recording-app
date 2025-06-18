import { Image, View, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Create components outside to prevent recreation
const logoImage = require("../assets/lt-logo.png");

const BackButton = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={{
        position: "absolute",
        left: 16,
        zIndex: 1,
        padding: 8,
      }}
    >
      <Ionicons name="arrow-back" size={28} color="#074566" />
    </TouchableOpacity>
  );
};

// Custom header that never re-renders to avoid flickering
export default function CustomHeader({ showBackButton = false }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        {showBackButton && <BackButton />}
        <View style={{ alignItems: "center" }}>
          <Image
            source={logoImage}
            style={{ width: 100, resizeMode: "contain" }}
          />
        </View>
      </View>
    </View>
  );
}
