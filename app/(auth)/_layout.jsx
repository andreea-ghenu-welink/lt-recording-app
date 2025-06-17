import { Stack } from "expo-router";
import { Image, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

function HeaderLogo() {
  return (
    <View style={{ alignItems: "center", paddingBlock: 8 }}>
      <Image
        source={require("../../assets/lt-logo.png")}
        style={{ width: 100, height: 80, resizeMode: "contain" }}
      />
    </View>
  );
}

function BackButton() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.back()} style={{ paddingLeft: 16 }}>
      <Ionicons name="chevron-back" size={24} color="#074566" />
    </TouchableOpacity>
  );
}

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTitle: () => <HeaderLogo />,
        headerLeft: () => <BackButton />,
      }}
    />
  );
}
