import styled from "styled-components/native";
import { View } from "react-native";

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
`;
const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-right: 15px;
`;
const FullName = styled.Text`
  color: white;
  font-size: 30px;
`;
const GreyText = styled.Text`
  color: #c2f542;
  font-size: 25px;
`;
const GroupDate = styled.Text`
  background-color: ${(props) => (props.active ? "#2A86FF;" : "#e9f5ff")};
  color: ${(props) => (props.active ? "#fff;" : "#4294ff")};
  font-size: 40px;
  font-weight: 600;
  border-radius: 18px;
  height: 60px;
  width: 140px;
  text-align: center;
  margin-left: 15px;
  text-justify: center;
  position: absolute;
  right: 20px;
`;
export const GroupClient = ({ title, items, navigation }) => {
  return (
    <Group>
      <GroupTitle>{title}</GroupTitle>
      {items.map((item) => (
        <GroupItem
          key={item.user.index}
          onPress={() => navigation.navigate("PatientCardScreen")}
        >
          <Avatar
            source={{
              uri: item.user.avatar,
            }}
          ></Avatar>
          <View>
            <FullName>{item.user.fullname}</FullName>
            <GreyText>{item.user.problem}</GreyText>
          </View>
          <GroupDate active={item.user.active}>{item.user.time}</GroupDate>
        </GroupItem>
      ))}
    </Group>
  );
};
