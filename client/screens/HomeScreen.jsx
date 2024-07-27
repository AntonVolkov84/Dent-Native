import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { FlatList, Text, View, Alert, TouchableHighlight } from "react-native";
import { GroupClient } from "../components/GroupClient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import axios from "../axios";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #1f1838;
`;
const PlusButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  background-color: #2a86ff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
  bottom: 80px;
`;

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const data = await axios.get("/appointments");
      setData(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <Container>
      <FlatList
        data={data}
        onRefresh={fetchApi}
        refreshing={isLoading}
        key={(item) => item.index}
        renderItem={({ item }) => (
          <GroupClient
            key={Date.parse(new Date())}
            navigation={navigation}
            items={item.Appointments}
            title={item._id.data}
            fetchApi={fetchApi}
          />
        )}
      ></FlatList>
      <PlusButton
        onPress={() => navigation.navigate("AddPatientsScreen")}
        style={{
          shadowColor: "grey",
          shadowOffset: {
            width: 4,
            height: 4,
          },
          shadowOpacity: 0.7,
          shadowRadius: 5,

          elevation: 5,
        }}
      >
        <AntDesign name="plus" size={40} color="white" />
      </PlusButton>
      <StatusBar />
    </Container>
  );
}
