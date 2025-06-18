import { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import authContent from "../../content/authContent";
import AuthScreenLayout from "@/layouts/AuthScreenLayout";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";

export default function EmailInputScreen() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { userType } = useLocalSearchParams();

  // Get the correct content based on the userType
  const content = authContent[userType]?.emailInput;

  const handleContinue = () => {
    router.push({
      // Navigate to the next step for the current userType
      pathname: `/(auth)/${userType}/email-password`,
      params: { email },
    });
  };

  if (!content) return null;

  return (
    <AuthScreenLayout title={content.title} subtitle={content.subtitle}>
      <FormInput
        label={content.inputLabel}
        value={email}
        onChangeText={setEmail}
        placeholder="your.email@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Continue" onPress={handleContinue} disabled={!email} />
    </AuthScreenLayout>
  );
}
