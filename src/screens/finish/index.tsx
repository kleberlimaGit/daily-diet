import { Text, Image } from "react-native";
import { ButtonContainer, Container, StrongText, Title } from "./styles";
import GoodFood from "@assets/goodfood.png";
import NotGoodFood from "@assets/notgoodfood.png";
import { Button } from "@components/button";
import { useNavigation, useRoute } from "@react-navigation/native";

interface RouteParam {
  isGood: boolean;
}

export default function Finish() {
  const route = useRoute();
  const navigation = useNavigation();

  const { isGood } = route.params as RouteParam;

  function goBackHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title color={isGood ? "PRIMARY" : "SECONDARY"}>{isGood ? "Continue assim!" : "Que pena!"}</Title>
      <Text style={{textAlign:"center"}}>
        {isGood ? "Você continua " : "Você "}
        <StrongText>
          {isGood ? "dentro da dieta. " : "saiu da dieta "}
        </StrongText>
        {isGood
          ? "Muito bem!"
          : "dessa vez, mas continue se esforçando e não desista!"}
      </Text>
      <Image source={isGood ? GoodFood : NotGoodFood} style={{ marginTop: 30, marginBottom: 30 }} />
      <ButtonContainer>
        <Button
          buttonType="PRIMARY"
          title="Ir para a página inicial"
          onPress={goBackHome}
        />
      </ButtonContainer>
    </Container>
  );
}
