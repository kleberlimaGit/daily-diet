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
import { getAllDiet, getDatesDiet, getPercentDiet } from "@storage/diet/Diet";
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
  const [dates, setDates] = useState<string[]>([]);

  async function getPercent() {
    const percent = await getPercentDiet();
    setPercent(percent);
  }

  async function getDiets() {
    const data = await getAllDiet();
    setDiet(data);
  }

  async function getDates() {
    const datesDiet = await getDatesDiet();
    setDates(datesDiet);
  }

  function handleGoAddNewDiet() {
    navigation.navigate("food",{ });
  }



  useFocusEffect(
    useCallback(() => {
      getPercent();
      getDiets();
      getDates();
    }, [])
  );

  return (
    <Container>
      <LogoContainer />
      <PercentDietHome percent={percent} onPress={() => {navigation.navigate('estatistic')}} />
      <Label>Refeições</Label>
      <Button
        icon="add"
        buttonType="PRIMARY"
        title="Nova Refeição"
        onPress={handleGoAddNewDiet}
      />
      <FlatList
        data={dates}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <FoodList diet={diet} key={item} date={item}/>}
        contentContainerStyle={[
          { width: 341, marginBottom: 100, marginTop: 10, paddingBottom:50},
          dates.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => (
          <ListEmpty message="Lista de dietas vazias." />
        )}
      />
    </Container>
  );
}
