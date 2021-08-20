import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Botao(props) {
  return (
    <View
      style={
        props.numero != "limpar" ? styles.botao : { ...styles.botao, flex: 2 }
      }
    >
      <TouchableOpacity
        onPress={() => props.logicalCalc(props.numero)}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.botaoText}>{props.numero}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "black",
    width: "33.33%",
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    height: "25%",
  },
  botaoText: {
    color: "white",
    fontSize: 18,
  },
});
