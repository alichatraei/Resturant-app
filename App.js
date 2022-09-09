import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ResturantContainer from "./src/Screens/ResturantContainer";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ResturantContainer"
          component={ResturantContainer}
          options={{ title: "Resturant" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
