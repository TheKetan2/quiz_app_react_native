import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import Questions from "../data/westerns";
import Button from "../components/Button";

const Quiz = () => {
  const [totalQue, setTotalQue] = useState(Questions.length);
  const [correctCount, setCorrectCount] = useState(0);
  const [queIndex, setQueIndex] = useState(0);

  let que = Questions[queIndex]["question"];
  let answers = Questions[queIndex]["answers"];

  const checkAnswer = (correct) => {
    if (correct) {
      setCorrectCount(
        queIndex == 0
          ? 1
          : correctCount + 1 > totalQue
          ? correctCount
          : correctCount + 1
      );
    }
    if (queIndex + 1 >= totalQue) {
      setQueIndex(0);
    } else setQueIndex(queIndex + 1);
  };
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
                onPress={() => checkAnswer(answer.correct)}
              />
            ))}
          </View>
        </View>
        <Text style={styles.text}>{`${correctCount}/${totalQue}`}</Text>
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
 * TODO: set state
 * correct count,
 * total count
 *
 *
 *
 */
