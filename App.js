import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import Botao from "./Botao";
import Display from "./Display";

export default function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secodNumber, setSecondNumber] = useState("");
  const [sinal, setSinal] = useState("");
  const [display, setDisplay] = useState(0);

  var numeros = [];
  for (var i = 0; i <= 9; i++) {
    numeros.push(i);
  }
  numeros.push("limpar");
  var operations = ["c", "+", "-", "/", "*", "="];

  const logicalCalc = (key) => {
    if (key == "limpar") {
      setFirstNumber("");
      setSecondNumber("");
      setSinal("");
      setDisplay(0);
      return;
    }

    if (key == "c") {
      if (
        operations.indexOf(display.toString()[display.toString().length - 1]) !=
        -1
      ) {
        setSinal("");
      } else if (sinal == "") {
        if (firstNumber != "" && firstNumber.toString().length > 1) {
          setFirstNumber(
            firstNumber
              .toString()
              .substring(0, firstNumber.toString().length - 1)
          );
        } else {
          setFirstNumber("");
        }
      } else if (sinal != "") {
        if (secodNumber != "" && secodNumber.toString().length > 1) {
          setSecondNumber(
            secodNumber.toString().substr(0, secodNumber.toString().length - 1)
          );
        } else {
          setSecondNumber("");
        }
      }
      setDisplay(display.toString().substr(0, display.toString().length - 1));
      return;
    }

    if (sinal == "") {
      if (operations.indexOf(key) != -1) {
        if (firstNumber == "" || key == "=") {
          return;
        } else {
          setSinal(key);
          setDisplay(firstNumber.toString() + key);
        }
      } else if (secodNumber == "") {
        setFirstNumber(firstNumber.toString() + key);
        setDisplay(firstNumber.toString() + key);
      }
    } else if (sinal != "") {
      if (operations.indexOf(key) != -1) {
        if (secodNumber == "" && key != "=") {
          setSinal(key);
          setDisplay(firstNumber.toString() + key);
        }
        if (secodNumber != "") {
          if (key == "=") {
            setDisplay(eval(display));
            setSinal("");
            setFirstNumber("");
            setSecondNumber("");
          } else {
            return;
          }
        }
      } else if (true) {
        setSecondNumber(secodNumber.toString() + key);
        setDisplay(display + key);
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style="auto" hidden />
      <Display textDisplay={display}></Display>
      <View
        style={{ flexDirection: "row", height: "16.6%", alignItems: "center" }}
      >
        {operations.map((operation) => {
          return (
            <TouchableOpacity
              style={{
                width: "16.66%",
                height: "100%",
                backgroundColor: "rgb(20,20,20)",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => logicalCalc(operation)}
            >
              <Text style={{ fontSize: 24, color: "white" }}>{operation}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          borderTopColor: "black",
          borderTopWidth: 2,
          height: "66.8%",
        }}
      >
        {numeros.map((num, index) => {
          return (
            <Botao key={index} numero={num} logicalCalc={logicalCalc}></Botao>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
