import { Stack } from "expo-router";
import {StatusBar, View} from "react-native";
import CustomHeader from "../../components/CustomHeader";

export default function AuthLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: StatusBar.currentHeight }}>
      <CustomHeader showBackButton={true}/>
      <Stack
        screenOptions={{
          headerShown: false, // Completely hide React Navigation header
          animation: 'none',
        }}
      />
    </View>
  );
}
