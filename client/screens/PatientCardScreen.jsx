import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Entypo from "@expo/vector-icons/Entypo";
import PatientProgramm from "../components/PatientProgramm";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #1f1838;
  padding: 0 40px;
`;

const PatientFullName = styled.Text`
  font-weight: 800;
  color: white;
  font-size: 50px;
`;

const GreyText = styled.Text`
  color: #c2f542;
  font-size: 25px;
  margin-bottom: 15px;
`;
const Button = styled.TouchableOpacity`
  border-radius: 30px;
  background-color: #2a86ff;
  width: 500px;
  height: 80px;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  color: white;
  font-size: 30px;
`;
const PatientButton = styled.View`
  display: flex;
  flex-direction: row;
`;
const ButtonPhone = styled.TouchableOpacity`
  margin-left: 50px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: #84d269;
  align-items: center;
  justify-content: center;
`;
const ButtonPhoneText = styled.Text`
  color: white;
  font-size: 25px;
`;
const Test = styled.View`
  width: 100%;
  height: 300px;
  background-color: white;
  border-radius: 18px;
  margin-top: 20px;
`;

export default function PatientCardScreen(props) {
  return (
    <Container>
      <PatientFullName>Volkov Anton</PatientFullName>
      <GreyText>+380958661514</GreyText>
      <PatientButton>
        <Button>
          <ButtonText>Нажми меня</ButtonText>
        </Button>
        <ButtonPhone>
          <Entypo name="phone" size={35} color="white" />
        </ButtonPhone>
      </PatientButton>
      <PatientProgramm />
      <PatientProgramm />
    </Container>
  );
}
