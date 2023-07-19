import { Header } from "@components/head/styles";
import {
  Container,
  Main,
  Section,
  AlternativeSection,
  SectionDateHour,
  Label,
} from "./styles";
import { Head } from "@components/head";
import { Input } from "@components/input";
import { Masks } from "react-native-mask-input";
import { useState } from "react";
import { Button } from "@components/button";
import { ScrollView, Alert } from "react-native";
import { ButtonTypeFood } from "@components/buttonTypeFood";
import { addDiet } from "@storage/diet/Diet";
import { useNavigation } from "@react-navigation/native";

export default function Food() {
  const navigation = useNavigation();

  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isGood, setIsGood] = useState(false);
  const [isBad, setIsBad] = useState(false);
  const [data, setData] = useState<DietDTO>({
    date: date,
    time: hour,
    name: name.trim(),
    description: description.trim(),
    isDietGood: false,
    id: "",
  });

  const HOUR_MASK = [/\d/, /\d/, ":", /\d/, /\d/];

  function handleChangeMealGood() {
    if (isGood) {
      setIsGood(false);
    } else {
      setIsGood(true);
      setIsBad(false);
    }
  }

  function handleChangeMealBad() {
    if (isBad) {
      setIsBad(false);
    } else {
      setIsGood(false);
      setIsBad(true);
    }
  }

  async function handAddNewDiet() {
    if (!isGood && !isBad) {
      return Alert.alert("Dieta", "Selecione o tipo da Dieta");
    }

    if (
      name.length > 0 &&
      description.length > 0 &&
      date.length === 10 &&
      hour.length === 5
    ) {
      
      try {
        await addDiet({date, name, description, time:hour, isDietGood: isGood, id: new Date().getTime().toString()});
        navigation.navigate("home");
      } catch (error) {
        return Alert.alert(
          "Erro!",
          "Erro inesperado tente novamente mais tarde."
        );
      }
    }
  }

  return (
    <Container>
      <Head color="GRAY" title="Nova refeição" />
      <Main>
        <ScrollView style={{ width: "100%" }}>
          <Input
            height="48px"
            label="Nome"
            value={name}
            onChangeText={setName}
          />
          <Input
            height="100px"
            label="Descrição"
            multiline={true}
            numberOfLines={10}
            style={{ textAlignVertical: "top" }}
            value={description}
            onChangeText={setDescription}
          />

          <SectionDateHour>
            <Input
              height="48px"
              label="Data"
              mask={Masks.DATE_DDMMYYYY}
              value={date}
              onChangeText={setDate}
            />
            <Input
              height="48px"
              label="Hora"
              mask={HOUR_MASK}
              value={hour}
              onChangeText={setHour}
            />
          </SectionDateHour>

          <Label>Está dentro da dieta?</Label>
          <AlternativeSection>
            <ButtonTypeFood
              color="PRIMARY"
              text="Sim"
              isActive={isGood}
              onPress={handleChangeMealGood}
            />
            <ButtonTypeFood
              color="SECONDARY"
              text="Não"
              isActive={isBad}
              onPress={handleChangeMealBad}
            />
          </AlternativeSection>
        </ScrollView>

        <Button
          buttonType="PRIMARY"
          title="Cadastrar Refeição"
          onPress={handAddNewDiet}
        />
      </Main>
    </Container>
  );
}
