import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255,255, 0.3)",
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});

/**
 * takes text and onPress
 *
 * style:
 * bg = rgba white 0.3
 * br 10,
 * paddingV
 * center everythng
 *
 * fontsize 20
 * color white
 * textalign center
 */
