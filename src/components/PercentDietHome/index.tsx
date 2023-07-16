import { TouchableOpacityProps } from "react-native";
import { Container, DietStatusProps, Icon, Subtitle, Title } from "./styles";
import { useTheme } from "styled-components/native";

interface Props extends TouchableOpacityProps, DietStatusProps {
    title?: string;
    subtitle?: string;
}

export function PercentDietHome({ title,subtitle,isDietGood = true, ...rest}: Props){
    const {COLORS} = useTheme();
    return (
        <Container isDietGood={isDietGood} {...rest}>
            <Icon color={isDietGood ? COLORS.GREEN_DARK : COLORS.RED_DARK}/>
            <Title>90,86%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Container>
    )
}