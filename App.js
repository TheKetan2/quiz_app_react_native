import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Quiz from "./screens/Quiz";

export default function App() {
  return (
    <View style={styles.container}>
      <Quiz />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
