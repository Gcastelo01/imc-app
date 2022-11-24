import React from "react";
import { View, Text } from "react-native";
import style from "./style";

export default function ResultIMC(props) {
  return (
    <>
      <View style={style.resultIMC} >
        <Text style={style.information}>{props.messageResult}</Text>
        <Text style={style.numberIMC} >{props.result}</Text>
      </View>
    </>
  );
}