import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Vibration } from "react-native";
import ResultImc from '../Form/ResultIMC/index';
import style from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState('Preencha o peso e a Altura');
  const [imc, setIMC] = useState(null);

  const createTwoButtonAlert = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  const calculateImc = () => {
    return setIMC((weight / (height * height)).toFixed(2));
  }

  const validationIMC = () => {
    if (weight !== null && height !== null) {
      calculateImc();
      setHeight(null);
      setWeight(null);
      setMessageIMC("Seu IMC é: ");

      return
    }

    setIMC(null);
    setMessageIMC("Preencha o peso e a Altura");
  }

  return (
    <>
      <View style={style.mainContainer}>
        <View style={style.form}>
          <Text style={style.formLabel}>Altura</Text>
          <TextInput
            placeholder="1.75"
            style={style.input}
            keyboardType="numeric"
            value={height}
            onChangeText={text => setHeight(text)}
          />

          <Text style={style.formLabel}>Peso</Text>
          <TextInput
            style={style.input}
            value={weight}
            placeholder="75"
            onChangeText={text => setWeight(text)}
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={style.buttonCalculate}
            onPress={_ => validationIMC()} >
            <Text style={style.textButtonCalculat}>Calcular</Text>
          </TouchableOpacity>
        </View>

        <ResultImc messageResult={messageIMC} result={imc} />
      </View>
    </>
  );
}