import {useState} from "react";
import {Text, StyleSheet} from "react-native";
import authContent from "../../content/authContent";
import {useRouter, useLocalSearchParams} from "expo-router";
import AuthScreenLayout from "@/layouts/AuthScreenLayout";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";
import Email from "@/components/Email";

export default function InstitutionEmailCode() {
  const [code, setCode] = useState("");
  const router = useRouter();
  const { userType, email } = useLocalSearchParams();

  // Get the correct content based on the userType
  const content = authContent[userType]?.emailCode;

  const handleContinue = () => {
  };

  if (!content) return null;

  return (
    <AuthScreenLayout title={content.title}>
      <Text style={styles.email}>
        Once you enter the code we sent to <Email emailAddress={email}/>, you'll be all logged in.
      </Text>
      <FormInput
        label="Code"
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
        placeholder="Enter code"
      />
      <Button
        title="Continue"
        onPress={handleContinue}
        disabled={!code}
      />
      <Text style={[styles.subtitle, {marginTop: 32}]}>
        Didn't get the code? Resend in 26 seconds.
      </Text>
      <Text style={styles.helpText}>Need help?</Text>
    </AuthScreenLayout>
  );
}

const styles = StyleSheet.create({
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32
  },
  helpText: {
    color: "#074566",
    textDecorationLine: "underline",
  }
});
