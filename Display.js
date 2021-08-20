import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Display(props) {
  return (
    <View style={styles.display}>
      <Text
        style={
          parseFloat(props.textDisplay) >= 0
            ? styles.displayText
            : styles.displayTextLass
        }
      >
        {props.textDisplay}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    backgroundColor: "rgb(20,20,20)",
    height: "16.6%",
    justifyContent: "center",
    paddingLeft: 20,
  },
  displayText: {
    fontSize: 18,
    color: "white",
  },
  displayTextLass: {
    fontSize: 18,
    color: "red",
  },
});
