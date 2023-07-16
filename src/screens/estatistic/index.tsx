import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Container, DietStatusProps, Header, Icon, IconContainer, Main, Subtitle, Title } from "./styles";
import { useTheme } from "styled-components/native";



interface Props extends TouchableOpacityProps, DietStatusProps {

}

export default function Estatistic({isDietGood = true ,...rest}:Props) {
const {COLORS} = useTheme();
  return (
    <Container >
      <Header isDietGood={isDietGood}>
        <IconContainer {...rest}>
            <Icon color={isDietGood ? COLORS.GREEN_DARK : COLORS.RED_DARK}/>
        </IconContainer>
        <Title>90,86%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Header>
      <Main>

      </Main>
    </Container>
  );
}
