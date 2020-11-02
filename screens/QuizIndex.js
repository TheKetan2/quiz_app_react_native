import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import Westerns from "../data/westerns";
import Computers from "../data/computers";
import Space from "../data/space";

const QuizIndex = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        text={"Westerns"}
        onPress={() => navigation.navigate("Quiz", { questions: Westerns })}
      />
      <Button
        text={"Computers"}
        onPress={() => navigation.navigate("Quiz", { questions: Computers })}
      />

      <Button
        text={"Space"}
        onPress={() => navigation.navigate("Quiz", { questions: Space })}
      />
    </View>
  );
};

export default QuizIndex;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36b1f0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
