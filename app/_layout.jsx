import {Stack} from "expo-router";
import {Image, StatusBar, View} from "react-native";
import CustomHeader from "../components/CustomHeader";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTitle: () => <CustomHeader/>,
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
