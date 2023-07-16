import { TouchableOpacityProps } from "react-native"
import { Bullet, Container, Divider, Meal, Time } from "./styles"

interface Props extends TouchableOpacityProps {
    meal: string;
}

export function Food({meal}: Props){
    return (
        <Container>
            <Time>20:00</Time>
            <Divider>|</Divider>
            <Meal numberOfLines={1} ellipsizeMode="tail">{meal}</Meal>
            <Bullet/>
        </Container>
    )
}