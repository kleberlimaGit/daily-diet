import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Estatistic from "@screens/estatistic";
import Food from "@screens/food";
import Home from "@screens/home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Food} />
    </Navigator>
  );
}