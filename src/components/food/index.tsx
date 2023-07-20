import { Bullet, Container, Divider, Meal, Time } from "./styles"
import { useNavigation } from "@react-navigation/native";

interface Props {
    meal: DietDTO;
}
export function Food({meal}: Props){
    const navigation = useNavigation();
    
    return (
        <Container onPress={() => {navigation.navigate("information", {id: meal.id!});}}>
            <Time>{meal.time}</Time>
            <Divider>|</Divider>
            <Meal numberOfLines={1} ellipsizeMode="tail">{meal.description}</Meal>
            <Bullet isDietGood={meal.isDietGood}/>
        </Container>
    )
}