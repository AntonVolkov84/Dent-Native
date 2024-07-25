import React, { useState } from "react";
import {
  Alert,
  Button,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import axios from "../axios";
import AddAppointment from "../components/AddAppointment";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #1f1838;
  padding: 0 40px;
`;
const InputName = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: white;
  padding: 10px;
  border-radius: 12px;
  margin-top: 10px;
`;
const InputPhone = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: white;
  padding: 10px;
  border-radius: 12px;
  margin-top: 10px;
`;
const InputButton = styled.View`
  width: 100%;
  height: 50px;
  background-color: blueviolet;
  padding: 10px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const InputButtonText = styled.Text`
  color: white;
`;

export default function AddPatientsScreen({ navigation }) {
  const [name, setName] = useState("");
  const [number, onChangeNumber] = useState("");

  const clear = () => {
    setName("");
    onChangeNumber("");
  };
  const handleSubmit = async () => {
    if (name === "" || number === "") {
      return Alert.alert("Не заполнено поле", "Не введено имя или телефон");
    }
    try {
      const data = await axios.post("/patients", {
        fullname: name,
        phone: number,
      });
      Alert.alert("Успешно", data.data.message);
    } catch (error) {
      Alert.alert("Ошибка", error.message);
      console.log(error);
    }

    clear();
  };
  return (
    <Container>
      <InputName
        onChangeText={setName}
        value={name}
        placeholder="Имя и фамилия"
      ></InputName>
      <InputPhone
        keyboardType="numeric"
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Номер телефона"
      ></InputPhone>
      <TouchableOpacity onPress={handleSubmit}>
        <InputButton>
          <InputButtonText>Принять пациента</InputButtonText>
        </InputButton>
      </TouchableOpacity>
      <AddAppointment />
    </Container>
  );
}
