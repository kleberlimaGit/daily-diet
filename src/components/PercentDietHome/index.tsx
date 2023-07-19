import { TouchableOpacityProps } from "react-native";
import { Container, DietStatusProps, Icon, Subtitle, Title } from "./styles";
import { useTheme } from "styled-components/native";

interface Props extends TouchableOpacityProps, DietStatusProps {
    percent: DietPercent;
}

export function PercentDietHome({ percent, ...rest}: Props){
    const {COLORS} = useTheme();

    return (
        <Container isDietGood={percent.isPercentGood} {...rest}>
            {percent.isPercentGood !== undefined && <Icon color={percent.isPercentGood ? COLORS.GREEN_DARK : COLORS.RED_DARK}/>}
            <Title>{percent.title}</Title>
            <Subtitle>{percent.subtitle}</Subtitle>
        </Container>
    )
}