import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {
  Container,
  DietContainer,
  DietStatusProps,
  Header,
  Icon,
  IconContainer,
  Main,
  Subtitle,
  Title,
} from "./styles";
import { useTheme } from "styled-components/native";
import { CardInfo } from "@components/cardInfo";

interface Props extends TouchableOpacityProps, DietStatusProps {}

export default function Estatistic({ isDietGood = true, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Header isDietGood={isDietGood}>
        <IconContainer {...rest}>
          <Icon color={isDietGood ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
        </IconContainer>
        <Title>90,86%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Header>
      <Main>
        <Subtitle>Estatísticas Gerais</Subtitle>
        <CardInfo color="GRAY" info="melhor sequência de pratos dentro da dieta" quantity="22"/>
        <CardInfo color="GRAY" info="refeições registradas" quantity="109"/>
        <DietContainer>
          <CardInfo color="GREEN" info="refeições dentro da dieta" quantity="99"/>
          <CardInfo color="RED" info="refeições fora da dieta" quantity="10"/>
        </DietContainer>
      </Main>
    </Container>
  );
}
