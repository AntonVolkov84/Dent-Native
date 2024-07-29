import React from "react";
import styled from "styled-components/native";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Group = styled.View`
  margin-top: 30px;
  width: 100%;
`;
const GroupWork = styled.View`
  margin-top: 30px;
  width: 100%;
  height: 200px;
  background-color: white;
  border-radius: 5px;
`;
const GroupTitle = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 0;
`;
const GroupIcon = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-left: 25px;
`;
const GroupIconButton = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
`;
const GroupIconText = styled.Text`
  color: black;
  margin-left: 20px;
  font-size: 20px;
`;
const GroupIconTime = styled.View`
  width: 190px;
  height: 50px;
  background-color: #2a86ff;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
`;
const GroupIconPrice = styled.View`
  margin-right: 10px;
  margin-left: 10px;
  width: 80px;
  height: 50px;
  background-color: #84d269;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
`;
const GroupIconTimeText = styled.Text`
  color: white;
  font-size: 18px;
`;
const GroupIconPriceText = styled.Text`
  color: white;
  font-size: 20px;
`;

export default function PatientProgramm({ item }) {
  return (
    <Group>
      <GroupTitle>{item.diagnosis}</GroupTitle>
      <GroupWork>
        <GroupIcon>
          <FontAwesome5 name="teeth-open" size={30} color="black" />
          <GroupIconText>{item.dentNumber}</GroupIconText>
        </GroupIcon>
        <GroupIcon>
          <FontAwesome5 name="diagnoses" size={30} color="black" />
          <GroupIconText>{item.diagnosis}</GroupIconText>
        </GroupIcon>
        <GroupIcon>
          <GroupIconButton>
            <GroupIconTime>
              <GroupIconTimeText>{new Date(item.date).toLocaleDateString("en-GB") + " " + item.time}</GroupIconTimeText>
            </GroupIconTime>
            <GroupIconPrice>
              <GroupIconPriceText>{item.price}</GroupIconPriceText>
            </GroupIconPrice>
          </GroupIconButton>
        </GroupIcon>
      </GroupWork>
    </Group>
  );
}
