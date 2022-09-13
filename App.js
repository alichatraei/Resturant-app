import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantCardItem from "./src/Components/RestaurantCardItem";
import RestaurantDetail from "./src/Screens/RestaurantDetail";
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
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetail}
          options={{ title: "Resturant Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
