import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import Questions from "../data/computers";

const Quiz = () => {
  let temp = Questions[0]["question"];
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.statusbar}>
        <StatusBar barStyle={"light-content"} />
        <Text style={styles.text}>{temp}</Text>
        <Text style={styles.text}>0/3</Text>
      </SafeAreaView>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36b1f0",
    flex: 1,
  },
  statusbar: {
    marginTop: 100,
    marginBottom: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "600",
  },
});

/**
 * bg #36b1f0
 * barstyle light-content
 * import question
 * text stye:
 * color white
 * fontsize 25
 * center
 * spacing 0.02
 * fontwt 600
 *
 * safeareastyle:
 * flex 1
 * margintop 100
 * justify space between
 *
 */
