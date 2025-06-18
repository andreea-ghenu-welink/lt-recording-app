import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button(
  { title,
    type = "primary",
    onPress = null,
    disabled = false
  }) {

  const buttonStyles = [
      styles.baseButton,
      styles[`${type}Button`],
      disabled && styles.disabledButton,
    ];

  const textStyles = [
    styles.baseButtonText,
    styles[`${type}ButtonText`],
    disabled && styles.disabledButtonText,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={textStyles}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseButton: {
    paddingVertical: 16,
    alignItems: "center",
  },
  baseButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryButton: {
    backgroundColor: "#074566",
  },
  primaryButtonText: {
    color: "#fff",
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: "#074566",
    paddingVertical: 14,
  },
  outlineButtonText: {
    color: "#074566",
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledButtonText: {},
});
