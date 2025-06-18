import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import authContent from "../../content/authContent";
import AuthScreenLayout from "@/layouts/AuthScreenLayout";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";
import Email from "@/components/Email";

export default function EmailPasswordScreen() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { userType, email } = useLocalSearchParams();

  const content = authContent[userType]?.emailPassword;

  const handleLogin = () => {
    // Handle password login
  };

  const handleCodeLogin = () => {
    router.push({
      pathname: `/(auth)/${userType}/email-code`,
      params: { email },
    });
  };

  if (!content) return null;

  return (
    <AuthScreenLayout title={content.title}>
      <Text style={styles.email}>
        with <Email emailAddress={email}/>
      </Text>
      <FormInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Log in" onPress={handleLogin} disabled={!password} />
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>
      <Button
        title="Log in with a code instead"
        type="outline"
        onPress={handleCodeLogin}
        variant="outline"
      />
    </AuthScreenLayout>
  );
}

const styles = StyleSheet.create({
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  dividerText: {
    marginHorizontal: 16,
    color: "#666",
    fontSize: 14,
  },
});
