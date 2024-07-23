import React from "react";
import styled from "styled-components/native";
import { FlatList, Text, View, Alert, TouchableHighlight } from "react-native";
import { GroupClient } from "../components/GroupClient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";

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
const data = [
  {
    title: "11 августа 2023",
    items: [
      {
        user: {
          avatar:
            "https://img.freepik.com/free-photo/3d-illustration-of-a-teenager-with-a-funny-face-and-glasses_1142-50955.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user",
          problem: "Super developer",
          fullname: "Volkov Anton",
          active: true,
          time: "12:30",
          index: 1,
        },
      },
      {
        user: {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjlnjfObw5pcrhHK6t9rR9PNtUBUeACj_9XQ&s",
          problem: "Super Wife",
          fullname: "Volkova Tatyana",
          time: "14:30",
          index: 2,
        },
      },
    ],
  },
  {
    title: "11 августа 2023",
    items: [
      {
        user: {
          avatar:
            "https://img.freepik.com/free-photo/3d-illustration-of-a-teenager-with-a-funny-face-and-glasses_1142-50955.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user",
          problem: "Super developer",
          fullname: "Volkov Anton",
          time: "12:30",
          index: 3,
        },
      },
      {
        user: {
          avatar:
            "https://img.freepik.com/premium-photo/3d-character-avatar_113255-5300.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user",
          problem: "Super Wife",
          fullname: "Volkova Tatyana",
          time: "14:30",
          index: 4,
        },
      },
    ],
  },
  {
    title: "11 августа 2023",
    items: [
      {
        user: {
          avatar:
            "https://img.freepik.com/free-photo/3d-illustration-of-a-teenager-with-a-funny-face-and-glasses_1142-50955.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user",
          problem: "Super developer",
          fullname: "Volkov Anton",
          time: "12:30",
          index: 5,
        },
      },
      {
        user: {
          avatar:
            "https://img.freepik.com/premium-photo/3d-character-avatar_113255-5300.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user",
          problem: "Super Wife",
          fullname: "Volkova Tatyana",
          time: "14:30",
          index: 6,
        },
      },
    ],
  },
  {
    title: "11 августа 2023",
    items: [
      {
        user: {
          avatar:
            "https://img.freepik.com/free-photo/3d-illustration-of-a-teenager-with-a-funny-face-and-glasses_1142-50955.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user",
          problem: "Super developer",
          fullname: "Volkov Anton",
          time: "12:30",
          index: 7,
        },
      },
      {
        user: {
          avatar:
            "https://img.freepik.com/premium-photo/3d-character-avatar_113255-5300.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user",
          problem: "Super Wife",
          fullname: "Volkova Tatyana",
          time: "14:30",
          index: 8,
        },
      },
    ],
  },
  {
    title: "11 августа 2023",
    items: [
      {
        user: {
          avatar:
            "https://img.freepik.com/free-photo/3d-illustration-of-a-teenager-with-a-funny-face-and-glasses_1142-50955.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user",
          problem: "Super developer",
          fullname: "Volkov Anton",
          time: "12:30",
          index: 9,
        },
      },
      {
        user: {
          avatar:
            "https://img.freepik.com/premium-photo/3d-character-avatar_113255-5300.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user",
          problem: "Super Wife",
          fullname: "Volkova Tatyana",
          time: "14:30",
          index: 10,
        },
      },
    ],
  },
  {
    title: "13 августа 2023",
    items: [
      {
        user: {
          avatar:
            "https://img.freepik.com/free-photo/3d-cartoon-character_23-2151021959.jpg",
          problem: "Super son",
          fullname: "Volkov Timofey",
          time: "12:30",
          index: 11,
        },
      },
      {
        user: {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeb2_M36xkSZ8kIKTKmcgvV0EyZSLLwhnrd3Vq-_i5Gi3KKlkN1EfnpcKdofmfMMf-xbY&usqp=CAUr",
          problem: "Super Kumetc",
          fullname: "Piskorskiy Andrey",
          time: "14:30",
          index: 12,
        },
      },
    ],
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <Container>
      <FlatList
        data={data}
        key={(item) => item.index}
        renderItem={({ item }) => (
          <GroupClient
            key={Date.parse(new Date())}
            navigation={navigation}
            items={item.items}
            title={item.title}
          />
        )}
      ></FlatList>
      <PlusButton
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
