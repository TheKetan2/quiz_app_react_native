import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import Questions from "../data/computers";
import Button from "../components/Button";

const Quiz = () => {
  let que = Questions[0]["question"];
  let answers = Questions[0]["answers"];
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.statusbar}>
        <View>
          <StatusBar barStyle={"light-content"} />
          <Text style={styles.text}>{que}</Text>
          <View style={styles.btn}>
            {answers.map((answer) => (
              <Button
                key={answer.id}
                text={answer.text}
                onPress={() => alert("hi")}
              />
            ))}
          </View>
        </View>
        <Text style={styles.text}>0/3</Text>
      </SafeAreaView>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 80,
  },
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
 * render button with button component
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
