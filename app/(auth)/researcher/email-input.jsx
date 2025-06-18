import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function ResearcherEmail() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    // Here you would check if the account exists
    // For now, let's assume it exists and navigate to password screen
    router.push({
      pathname: "/(auth)/researcher/email-password",
      params: { email: email },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Continue with Email</Text>
        <Text style={styles.subtitle}>
          We"ll check if you have an account, and help create one if you don"t.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email (personal or work)</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="your.email@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity
          style={[styles.continueButton, !email && styles.disabledButton]}
          onPress={handleContinue}
          disabled={!email}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 16,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#074566",
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 16,
  },
  disabledButton: {
    opacity: 0.5,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
