import styled from "styled-components/native";
import { View, Text } from "react-native";
import getAvatarColor from "../utils/getAvatarColor";

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
export const GroupClient = ({ title, items, navigation }) => {
  return (
    <Group>
      <GroupTitle>{title}</GroupTitle>
      {items.map((item) => (
        <GroupItem
          key={item.index}
          onPress={() => navigation.navigate("PatientCardScreen")}
        >
          <AvatarNew
            style={{
              backgroundColor: getAvatarColor(item.fullname[0].toUpperCase())
                .background,
            }}
          >
            <AvatarNewText
              style={{
                color: getAvatarColor(item.fullname[0].toUpperCase()).color,
              }}
            >
              {item.fullname[0].toUpperCase()}
            </AvatarNewText>
          </AvatarNew>
          <View>
            <FullName>{item.fullname}</FullName>
            <GreyText>{item.diagnosis}</GreyText>
          </View>
          <GroupDate active={title}>{item.time}</GroupDate>
        </GroupItem>
      ))}
    </Group>
  );
};
