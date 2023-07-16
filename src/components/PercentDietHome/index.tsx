import { TouchableOpacityProps } from "react-native";
import { Container, DietStatusProps, Icon, Subtitle, Title } from "./styles";

interface Props extends TouchableOpacityProps, DietStatusProps {
    title?: string;
    subtitle?: string;
}

export function PercentDietHome({ title,subtitle,isDietGood = true, ...rest}: Props){
    return (
        <Container isDietGood={isDietGood}>
            <Icon/>
            <Title>90,86%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Container>
    )
}