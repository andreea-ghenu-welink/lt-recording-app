import {Text} from "react-native";

export default function Email({ emailAddress }) {
  return (
    <Text style={{ fontWeight: "600" }}>{ emailAddress }</Text>
  );
}
