import { Stack } from "expo-router";
import { Image, View } from "react-native";

function HeaderLogo() {
  return (
    <View style={{ alignItems: "center", paddingBlock: 8 }}>
      <Image
        source={require("../assets/lt-logo.png")}
        style={{ width: 100, height: 80, resizeMode: "contain" }}
      />
    </View>
  );
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTitle: () => <HeaderLogo />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false, // Auth screens will handle their own headers
        }}
      />
    </Stack>
  );
}
