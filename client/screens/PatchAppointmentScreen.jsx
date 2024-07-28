import { StyleSheet, SafeAreaView, Alert, Modal, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import axios from "../axios";
import { useState, useEffect } from "react";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #1f1838;
  padding: 0 40px;
`;

const Title = styled.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
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
const InputButtonBack = styled.View`
  width: 160px;
  height: 50px;
  background-color: red;
  padding: 10px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const InputButtonAdd = styled.View`
  width: 160px;
  height: 50px;
  background-color: green;
  padding: 10px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const InputButtonText = styled.Text`
  color: white;
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
const InputAllButon = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const InputFieldDateText = styled.TextInput`
  width: 48%;
  height: 50px;
  background-color: white;
  padding: 10px;
  border-radius: 12px;
  margin-top: 10px;
`;
const InputFieldDateButton = styled.TouchableOpacity`
  width: 48%;
  height: 50px;
  background-color: green;
  padding: 10px;
  border-radius: 12px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

function PatchAppointmentScreen({ route, navigation }) {
  const { item } = route.params;
  const [dentNumber, setDentNumber] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patient, setPatient] = useState("");
  const [id, setId] = useState("");
  const [patients, setPatients] = useState([]);
  const [showPickerDate, setShowPickerDate] = useState(false);
  const [showPickerTime, setShowPickerTime] = useState(false);

  useEffect(() => {
    getPatients();
    setDentNumber(item.dentNumber.toString());
    setPrice(item.price.toString());
    setPatient(item.fullname);
    setId(item.id);
    setTime(item.time);
    setDate(item.date);
    setDiagnosis(item.diagnosis);
  }, []);
  const getPatients = async () => {
    try {
      const data = await axios.get("/patients");
      setPatients(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const patchAppointment = async () => {
    try {
      const data = await axios.patch("/appointments", {
        patient: patient,
        dentNumber: dentNumber,
        diagnosis: diagnosis,
        price: price,
        date: date,
        time: time,
        id: id,
      });
      Alert.alert("Ну ладно, исправлю", data.data.message, [{ text: "Ok" }]);
      props.setVisibilityForModal(false);
      clearHandleAddAppointment();
      props.fetchApi();
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddAppointment = () => {
    if (dentNumber === "" || diagnosis === "" || price === "" || date === "" || time === "" || patient === "") {
      return Alert.alert("Пустое поле", "Заполните все поля, пожалуйста");
    }
    return patchAppointment();
  };
  const clearHandleAddAppointment = () => {
    setPatient("");
    setTime("");
    setDate("");
    setDentNumber("");
    setDiagnosis("");
    setPrice("");
  };
  const handleChangeDate = (event, selectedDate) => {
    setShowPickerDate(false);
    setDate(new Date(event.nativeEvent.timestamp).toLocaleDateString());
    navigation.goBack();
  };
  const handleChangeTime = (event, selectedDate) => {
    setShowPickerTime(false);
    setTime(
      new Date(event.nativeEvent.timestamp).toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    navigation.goBack();
  };
  return (
    <Container>
      <Title>
        <TitleText>Назначения</TitleText>
      </Title>
      <SelectDropdown
        data={patients}
        onSelect={(selectedItem) => setPatient(selectedItem)}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              {selectedItem && <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />}
              <Text style={styles.dropdownButtonTxtStyle}>{(selectedItem && selectedItem.fullname) || patient}</Text>
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
      <InputField
        keyboardType="numeric"
        placeholder="Номер зуба"
        onChangeText={setDentNumber}
        value={dentNumber}
      ></InputField>
      <InputField placeholder="Диагноз" onChangeText={setDiagnosis} value={diagnosis}></InputField>
      <InputField placeholder="Цена" keyboardType="numeric" onChangeText={setPrice} value={price}></InputField>
      <View style={{ flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center" }}>
        <InputFieldDateText
          placeholder="Дата"
          keyboardType="numeric"
          onChangeText={setDate}
          value={date}
        ></InputFieldDateText>
        <InputFieldDateButton onPress={() => setShowPickerDate(true)}>
          <Text style={{ color: "white" }}>Выбрать дату</Text>
        </InputFieldDateButton>
      </View>
      {showPickerDate && <DateTimePicker mode={"date"} value={new Date()} onChange={handleChangeDate} />}
      <View style={{ flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center" }}>
        <InputFieldDateText
          placeholder="Время"
          keyboardType="numeric"
          onChangeText={setTime}
          value={time}
        ></InputFieldDateText>
        <InputFieldDateButton onPress={() => setShowPickerTime(true)}>
          <Text style={{ color: "white" }}>Выберите время</Text>
        </InputFieldDateButton>
      </View>
      {showPickerTime && (
        <DateTimePicker mode={"time"} value={new Date()} is24Hour={true} onChange={handleChangeTime} />
      )}
      <InputAllButon>
        <TouchableOpacity>
          <InputButtonBack>
            <InputButtonText onPress={() => navigation.goBack()}>Отмена</InputButtonText>
          </InputButtonBack>
        </TouchableOpacity>
        <TouchableOpacity>
          <InputButtonAdd>
            <InputButtonText onPress={handleAddAppointment}>Принять</InputButtonText>
          </InputButtonAdd>
        </TouchableOpacity>
      </InputAllButon>
    </Container>
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

export default PatchAppointmentScreen;
