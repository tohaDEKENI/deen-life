import { StyleSheet, Text, View } from "react-native";

export default function FirstTimeNotice() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>🎉 C'est votre première fois !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  message: {
    color: "#facc15",
    fontSize: 24,
    textAlign: "center",
  },
});
