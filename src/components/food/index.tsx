import { TouchableOpacityProps } from "react-native"
import { Bullet, Container, Divider, Meal, Time } from "./styles"

interface Props extends TouchableOpacityProps {
    meal: DietDTO;
}

export function Food({meal}: Props){
    
    return (
        <Container>
            <Time>{meal.time}</Time>
            <Divider>|</Divider>
            <Meal numberOfLines={1} ellipsizeMode="tail">{meal.description}</Meal>
            <Bullet isDietGood={meal.isDietGood}/>
        </Container>
    )
}