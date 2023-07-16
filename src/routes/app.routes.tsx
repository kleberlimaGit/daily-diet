import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Estatistic from "@screens/estatistic";
import Home from "@screens/home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Estatistic} />
    </Navigator>
  );
}