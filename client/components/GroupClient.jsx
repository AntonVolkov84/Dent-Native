import styled from "styled-components/native";
import { View, Text, Alert } from "react-native";
import getAvatarColor from "../utils/getAvatarColor";
import { SwipeListView } from "react-native-swipe-list-view";
import axios from "../axios";
import { Ionicons } from "@expo/vector-icons";

const Group = styled.View`
  padding: 0 40px;
`;
const GroupTitle = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 30px;
  margin: 20px auto;
  margin-bottom: 0;
`;
const GroupItem = styled.TouchableOpacity`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
  position: relative;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
  background-color: #1f1838;
`;
const AvatarNew = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 15px;
  background: white;
  justify-content: center;
  align-items: center;
`;
const AvatarNewText = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 20px;
`;

const FullName = styled.Text`
  color: white;
  font-size: 20px;
`;
const GreyText = styled.Text`
  color: #c2f542;
  font-size: 18px;
`;
const GroupDate = styled.Text`
  background-color: ${(props) => (props.active ? "#2A86FF;" : "#e9f5ff")};
  color: ${(props) => (props.active ? "#fff;" : "#4294ff")};
  font-size: 25px;
  font-weight: 600;
  border-radius: 18px;
  height: 40px;
  width: 100px;
  text-align: center;
  margin-left: 15px;
  text-justify: center;
  position: absolute;
  right: 0px;
`;
const Hiden = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0px;
  gap: 10px;
`;
const HidenDel = styled.TouchableOpacity`
  background-color: red;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 8px;
`;
const HidenDelText = styled.Text`
  color: white;
  font-size: 12px;
`;
const HidenUpdate = styled.TouchableOpacity`
  background-color: green;
  margin-top: 20px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const HidenUpdateText = styled.Text`
  color: white;
  font-size: 12px;
`;
export const GroupClient = ({ title, items, navigation, fetchApi }) => {
  const delAppointment = async (id) => {
    try {
      const data = await axios.delete(`/appointments/${id}`);
      if (data) {
        Alert.alert("Ghbdtn", data.data.message, [{ text: "Ask me latter" }, { text: "eefefef" }]);
      }
      fetchApi();
    } catch (error) {
      console.log(error);
    }
  };
  const patcAppointment = async (item) => {
    try {
      const data = await axios.patch(`/appointments`, {});
      if (data) {
        Alert.alert("Внимание", data.data.message, [{ text: "Ясно, понятно" }]);
      }
      fetchApi();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Group>
      <GroupTitle>{title}</GroupTitle>
      <SwipeListView
        data={items}
        renderItem={(data, rowMap) => (
          <>
            <GroupItem
              key={data.item.index}
              onPress={() => navigation.navigate("PatientCardScreen", { item: data.item })}
            >
              <AvatarNew
                style={{
                  backgroundColor: getAvatarColor(data.item.fullname[0].toUpperCase()).background,
                }}
              >
                <AvatarNewText
                  style={{
                    color: getAvatarColor(data.item.fullname[0].toUpperCase()).color,
                  }}
                >
                  {data.item.fullname[0].toUpperCase()}
                </AvatarNewText>
              </AvatarNew>
              <View>
                <FullName>{data.item.fullname}</FullName>
                <GreyText>{data.item.diagnosis}</GreyText>
              </View>
              <GroupDate active={title}>{data.item.time}</GroupDate>
            </GroupItem>
          </>
        )}
        renderHiddenItem={(data, rowMap) => (
          <Hiden>
            <HidenUpdate
              onPress={() => {
                patcAppointment(data.item);
              }}
            >
              <HidenUpdateText>Замена</HidenUpdateText>
            </HidenUpdate>
            <HidenDel
              onPress={() => {
                delAppointment(data.item.id);
              }}
            >
              <Ionicons color="white" size="20" name="trash"></Ionicons>
            </HidenDel>
          </Hiden>
        )}
        rightOpenValue={-120}
      ></SwipeListView>
    </Group>
  );
};
