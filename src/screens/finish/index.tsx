import { Text, Image } from "react-native";
import { ButtonContainer, Container, StrongText, Title } from "./styles";
import GoodFood from "@assets/goodfood.png";
import NotGoodFood from "@assets/notgoodfood.png";
import { Button } from "@components/button";

export default function Finish() {
  return (
    <Container>
      <Title color="PRIMARY">Continue Assim</Title>
      <Text>
        Você continua <StrongText>dentro da dieta. </StrongText>Muito bem!
      </Text>
      <Image source={GoodFood} style={{ marginTop: 30, marginBottom: 30 }} />
      <ButtonContainer>
        <Button buttonType="PRIMARY" title="Ir para a página inicial" />
      </ButtonContainer>
    </Container>
  );
}
