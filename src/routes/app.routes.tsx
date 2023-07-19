import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Estatistic from "@screens/estatistic";
import Finish from "@screens/finish";
import Food from "@screens/food";
import Home from "@screens/home";
import Information from "@screens/information";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="food" component={Food} />
      <Screen name="estatistic" component={Estatistic} />
      <Screen name="information" component={Information} />
      <Screen name="finish" component={Finish} />
    </Navigator>
  );
}