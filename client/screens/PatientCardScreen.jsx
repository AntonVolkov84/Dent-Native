import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styled from "styled-components";
import Entypo from "@expo/vector-icons/Entypo";
import PatientProgramm from "../components/PatientProgramm";
import axios from "../axios";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #1f1838;
  padding: 0 40px;
`;

const PatientFullName = styled.Text`
  font-weight: 400;
  color: white;
  font-size: 30px;
`;

const GreyText = styled.Text`
  color: #c2f542;
  font-size: 25px;
  margin-bottom: 15px;
`;
const Button = styled.TouchableOpacity`
  border-radius: 30px;
  background-color: #2a86ff;
  width: 230px;
  height: 80px;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;
const PatientButton = styled.View`
  display: flex;
  flex-direction: row;
`;
const ButtonPhone = styled.TouchableOpacity`
  margin-left: 20px;
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
const Load = styled.View`
  width: 100%;
  height: 400px;
  background-color: blueviolet;
  padding: 10px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const LoadText = styled.Text`
  color: white;
  font-size: 25px;
`;

export default function PatientCardScreen({ route }) {
  const { item } = route.params;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAppointmentBy = async () => {
    try {
      const data = await axios.get(`/appointments/${item.phone}`);
      setData(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointmentBy();
  }, []);
  return (
    <Container>
      <PatientFullName>{item.fullname}</PatientFullName>
      <GreyText>{item.phone}</GreyText>
      <PatientButton>
        <Button>
          <ButtonText>Позвонить</ButtonText>
        </Button>
        <ButtonPhone>
          <Entypo name="phone" size={35} color="white" />
        </ButtonPhone>
      </PatientButton>
      {isLoading ? (
        <Load>
          <LoadText>Подождите</LoadText>
        </Load>
      ) : (
        <FlatList
          data={data}
          key={(item) => item.index}
          renderItem={({ item }) => <PatientProgramm item={item} />}
        ></FlatList>
      )}
    </Container>
  );
}
