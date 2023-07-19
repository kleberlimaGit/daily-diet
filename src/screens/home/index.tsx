import { PercentDietHome } from "@components/PercentDietHome";
import { Container, Label } from "./styles";
import { LogoContainer } from "@components/logoContainer";
import { Button } from "@components/button";
import { FoodList } from "@components/foodList";
import { FlatList } from "react-native";

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { getAllDiet, getPercentDiet } from "@storage/diet/Diet";
import { useState, useCallback } from "react";
import { ListEmpty } from "@components/listEmpty";

export default function Home() {
  const route = useRoute();
  const navigation = useNavigation();
  const [percent, setPercent] = useState<DietPercent>({
    subtitle: "",
    title: "",
  });

  const [diet, setDiet] = useState<DietDTO[]>([]);

  async function getPercent() {
    const percent = await getPercentDiet();
    setPercent(percent);
  }

  function handleGoAddNewDiet() {
    navigation.navigate("food");
  }

  async function getDiets() {
    const data = await getAllDiet();
    setDiet(data);
  }

  useFocusEffect(
    useCallback(() => {
      getPercent();
      getDiets();
    }, [])
  );

  return (
    <Container>
      <LogoContainer />
      <PercentDietHome percent={percent} onPress={() => {}} />
      <Label>Refeições</Label>
      <Button
        icon="add"
        buttonType="PRIMARY"
        title="Nova Refeição"
        onPress={handleGoAddNewDiet}
      />
      <FlatList
        data={diet}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
            <FoodList diet={item}/>
        )}
        contentContainerStyle={diet.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty message="Lista de times vazia."/>
        )}
      />
    </Container>
  );
}
