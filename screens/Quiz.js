import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import Questions from "../data/westerns";
import Button from "../components/Button";

const screen = Dimensions.get("window");

const Quiz = ({ navigation, route }) => {
  const [questions, setQuestions] = useState(route.params.questions);
  const [totalQue, setTotalQue] = useState(questions.length);
  const [correctCount, setCorrectCount] = useState(0);
  const [queIndex, setQueIndex] = useState(0);
  const [show, setShow] = useState();
  const [right, setRight] = useState(false);

  useEffect(() => {
    console.log();

    // setTotalQue(questions.length);
    console.log(questions);
  }, []);

  let que = questions ? questions[queIndex]["question"] : null;
  let answers = questions ? questions[queIndex]["answers"] : null;

  const checkAnswer = (correct) => {
    if (queIndex === 0) setCorrectCount(0);
    setShow(true);
    if (correct) {
      setRight(true);
      setTimeout(() => {
        setCorrectCount(
          queIndex == 0
            ? 1
            : correctCount + 1 > totalQue
            ? correctCount
            : correctCount + 1
        );
        setShow(false);
        setRight(false);
      }, 1000);
    } else {
      setRight(false);
    }

    if (queIndex + 1 >= totalQue) {
      setTimeout(() => {
        setQueIndex(0);
        setShow(false);
        setRight(false);
      }, 1000);
    } else
      setTimeout(() => {
        setQueIndex(queIndex + 1);
        setShow(false);
        setRight(false);
      }, 1000);
  };
  return que ? (
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
      {show ? (
        <View
          style={[
            styles.imageContainer,
            { backgroundColor: right ? "green" : "red" },
          ]}
        >
          <Image
            style={styles.image}
            source={
              right
                ? require("../assets/check.png")
                : require("../assets/close.png")
            }
            resizeMode="contain"
          />
        </View>
      ) : null}
    </View>
  ) : null;
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
  image: {
    width: 70,
    alignSelf: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    position: "absolute",
    justifyContent: "center",
    borderRadius: 100,
    top: screen.height / 3 + 20,
    left: screen.width / 3 - 10,
    borderWidth: 5,
    borderColor: "#fff",
    shadowColor: "grey",
    // shadowOffset: "20",
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
