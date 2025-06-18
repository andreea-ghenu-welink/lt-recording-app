import { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Button from "@/components/Button";

export default function AuthScreen() {
  const [activeScreen, setActiveScreen] = useState("researcher");
  const router = useRouter();

  const handleEmailContinue = () => {
    router.push(`/(auth)/${activeScreen}/email-input`);
  };

  const handleORCIDContinue = () => {
    // Handle ORCID authentication
    // router.push(`/(auth)/researcher/orcid`);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Login in or sign up in seconds</Text>
        <View style={styles.navLinksContainer}>
          <TouchableOpacity onPress={() => setActiveScreen("researcher")}>
            <Text
              style={[
                styles.navLink,
                activeScreen === "researcher" && styles.activeNavLink,
              ]}
            >
              Researcher
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveScreen("institution")}>
            <Text
              style={[
                styles.navLink,
                activeScreen === "institution" && styles.activeNavLink,
              ]}
            >
              Institution
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ctaLinkContainer}>
          {activeScreen === "researcher" ? (
            <>
              <Button
                title="Continue with ORCID"
                type="outline"
                onPress={handleORCIDContinue}
              />
              <Button
                title="Continue with Email"
                type="outline"
                onPress={handleEmailContinue}
              />
            </>
          ) : (
            <Button
              title="Continue with Email"
              type="outline"
              onPress={handleEmailContinue}
            />
          )}
        </View>
      </View>

      <Text style={styles.termsText}>
        By continuing, you agree to LT"s{" "}
        <Text style={{ fontStyle: "italic" }}>Terms of Use</Text>. Read our{" "}
        <Text style={{ fontStyle: "italic" }}>Privacy Policy</Text>.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    lineHeight: 45,
    color: "#333",
    marginBottom: 36,
    width: "90%",
  },
  navLinksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 64,
  },
  navLink: {
    fontSize: 20,
    color: "#C0C0C0",
    fontWeight: "600",
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
    marginRight: 24,
    paddingBottom: 8,
  },
  activeNavLink: {
    color: "#074566",
    borderBottomColor: "#074566",
  },
  ctaLinkContainer: {
    gap: 28,
    width: "100%",
  },
  ctaLink: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#074566",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaLinkText: {
    color: "#074566",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  termsText: {
    fontSize: 16,
    color: "gray",
    lineHeight: 30,
    marginBottom: 32,
  },
});
