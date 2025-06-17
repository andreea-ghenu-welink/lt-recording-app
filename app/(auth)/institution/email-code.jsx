import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function InstitutionEmailCode() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleContinue = () => {
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Finish logging in</Text>
        <Text style={styles.subtitle}>
          Once you enter the code we sent to your.email@gmail.com, you’ll be all logged in.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Code</Text>
          <TextInput
            style={styles.input}
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
            placeholder="Enter code"
          />
        </View>

        <TouchableOpacity
          style={[styles.continueButton, !code && styles.disabledButton]}
          onPress={handleContinue}
          disabled={!code}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        <Text style={[styles.subtitle, { marginTop: 32 }]}>Didn’t get the code? Resend in 26 seconds.</Text>
        <Text style={styles.helpText}>Need help?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 32,
  },
  helpText: {
    color: "#074566",
    textDecorationLine: "underline"
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 16,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#074566',
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  disabledButton: {
    opacity: 0.5,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
