import { Header } from "@components/head/styles";
import {
  Container,
  Main,
  AlternativeSection,
  SectionDateHour,
  Label,
} from "./styles";
import { Head } from "@components/head";
import { Input } from "@components/input";
import { Masks } from "react-native-mask-input";
import { useEffect, useState } from "react";
import { Button } from "@components/button";
import { ScrollView, Alert } from "react-native";
import { ButtonTypeFood } from "@components/buttonTypeFood";
import { addDiet, getById } from "@storage/diet/Diet";
import { useNavigation, useRoute } from "@react-navigation/native";


interface RouteParams {
  idDiet?: string;
}


export default function Food() {
  const navigation = useNavigation();
  const route = useRoute();
  const { idDiet } = route.params as RouteParams;

  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [isGood, setIsGood] = useState(false);
  const [isBad, setIsBad] = useState(false);

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

  async function getDietById(){
    if(idDiet){
      const dto = await getById(idDiet);
      setDate(dto!.date)
      setHour(dto!.time)
      setName(dto!.name)
      setDescription(dto!.description)
      if(dto!.isDietGood){
        setIsGood(true)
      }else{
        setIsBad(true)
      }
      setId(idDiet)
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
        await addDiet({date, name, description, time:hour, isDietGood: isGood, id});
        navigation.navigate("finish", {isGood});
      } catch (error) {
        return Alert.alert(
          "Erro!",
          "Erro inesperado tente novamente mais tarde."
        );
      }
    }
  }

  useEffect(() => {
    getDietById()
  },[])

  return (
    <Container>
      <Head color="GRAY" title={idDiet ? 'Editar refeição' : 'Nova refeição'} />
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
              keyboardType="number-pad"
            />
            <Input
              height="48px"
              label="Hora"
              mask={HOUR_MASK}
              value={hour}
              onChangeText={setHour}
              keyboardType="number-pad"
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
