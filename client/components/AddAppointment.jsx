import { StyleSheet, Alert, Button, TextInput, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import axios from "../axios";
import { useState, useEffect } from "react";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Title = styled.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;
const TitleText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
const InputField = styled.TextInput`
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
const emojisWithIcons = [
  { title: "happy", icon: "emoticon-happy-outline" },
  { title: "cool", icon: "emoticon-cool-outline" },
  { title: "lol", icon: "emoticon-lol-outline" },
  { title: "sad", icon: "emoticon-sad-outline" },
  { title: "cry", icon: "emoticon-cry-outline" },
  { title: "angry", icon: "emoticon-angry-outline" },
  { title: "confused", icon: "emoticon-confused-outline" },
  { title: "excited", icon: "emoticon-excited-outline" },
  { title: "kiss", icon: "emoticon-kiss-outline" },
  { title: "devil", icon: "emoticon-devil-outline" },
  { title: "dead", icon: "emoticon-dead-outline" },
  { title: "wink", icon: "emoticon-wink-outline" },
  { title: "sick", icon: "emoticon-sick-outline" },
  { title: "frown", icon: "emoticon-frown-outline" },
];
export default function AddAppointment() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const data = await axios.get("/patients");
      setData(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Title>
        <TitleText>Назначения</TitleText>
      </Title>
      <SelectDropdown
        data={data}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>{selectedItem.fullname || "Выберите пациента"}</Text>
              <Icon name={isOpened ? "chevron-up" : "chevron-down"} style={styles.dropdownButtonArrowStyle} />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: "#D2D9DF" }) }}>
              <Text style={styles.dropdownItemTxtStyle}>{item.fullname}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={true}
      ></SelectDropdown>
      <InputField placeholder="Номер зуба"></InputField>
      <InputField placeholder="Диагноз"></InputField>
      <InputField placeholder="Цена"></InputField>
      <InputField placeholder="Дата"></InputField>
      <InputField placeholder="Время"></InputField>
      <TouchableOpacity>
        <InputButton>
          <InputButtonText>Выставить назначения</InputButtonText>
        </InputButton>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 330,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
