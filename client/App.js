import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PatientCardScreen from "./screens/PatientCardScreen";
import AddPatientsScreen from "./screens/AddPatientsScreen";
import PatchAppointmentScreen from "./screens/PatchAppointmentScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Главная страница",
            headerStyle: {
              backgroundColor: "#1f1838",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="PatientCardScreen"
          options={{
            title: "Карта пациента",
            headerStyle: {
              backgroundColor: "#1f1838",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={PatientCardScreen}
        />
        <Stack.Screen
          name="AddPatientsScreen"
          options={{
            title: "Добавление пациента",
            headerStyle: {
              backgroundColor: "#1f1838",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={AddPatientsScreen}
        />
        <Stack.Screen
          name="PatchAppointmentScreen"
          options={{
            title: "Изменение приема",
            headerStyle: {
              backgroundColor: "#1f1838",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={PatchAppointmentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
