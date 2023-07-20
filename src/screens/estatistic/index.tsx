import { TouchableOpacityProps } from "react-native";
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
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { getEstatiscticDiet, getPercentDiet } from "@storage/diet/Diet";

export default function Estatistic() {
  const { COLORS } = useTheme();

  const navigation = useNavigation();
  const [percent, setPercent] = useState<DietPercent>({
    subtitle: "",
    title: "",
  });
  const [estatistics, setEstatistics] = useState<Estatistic>({
    betterSequenceDietGood: 0,
    totalMeal: 0,
    totalMealBad: 0,
    totalMealGood: 0,
  });

  async function getEstatistic() {
    const estatistic = await getEstatiscticDiet();
    setEstatistics(estatistic);
  }

  async function getPercent() {
    const percent = await getPercentDiet();
    setPercent(percent);
  }

  function handleGoBackHome() {
    navigation.navigate("home");
  }


  useFocusEffect(
    useCallback(() => {
      getPercent();
      getEstatistic();
    }, [])
  );

  return (
    <Container>
      <Header isDietGood={percent.isPercentGood}>
        <IconContainer onPress={handleGoBackHome}>
          <Icon
            color={percent.isPercentGood ? COLORS.GREEN_DARK : COLORS.RED_DARK}
          />
        </IconContainer>
        <Title>{percent.title}</Title>
        <Subtitle>{percent.subtitle}</Subtitle>
      </Header>
      <Main>
        <Subtitle>Estatísticas Gerais</Subtitle>
        <CardInfo
          color="GRAY"
          info="melhor sequência de pratos dentro da dieta"
          quantity={estatistics.betterSequenceDietGood}
        />
        <CardInfo
          color="GRAY"
          info="refeições registradas"
          quantity={estatistics.totalMeal}
        />
        <DietContainer>
          <CardInfo
            color="GREEN"
            info="refeições dentro da dieta"
            quantity={estatistics.totalMealGood}
          />
          <CardInfo
            color="RED"
            info="refeições fora da dieta"
            quantity={estatistics.totalMealBad}
          />
        </DietContainer>
      </Main>
    </Container>
  );
}
