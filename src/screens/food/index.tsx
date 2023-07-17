import { Header } from "@components/head/styles";
import { Container, Main, Section, SectionDateHour } from "./styles";
import { Head } from "@components/head";
import { Input } from "@components/input";
import { Masks } from "react-native-mask-input";
import { useState } from "react";
import { Button } from "@components/button";
import { ScrollView } from "react-native";

export default function Food() {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const Hour_MASK = [/\d/, /\d/, ":", /\d/, /\d/];
  return (
    <Container>
      <Head color="GRAY" title="Nova refeição" />
      <Main>
        <ScrollView style={{width:"100%"}}>
          <Input height="48px" label="Nome" />
          <Input
            height="120px"
            label="Descrição"
            multiline={true}
            numberOfLines={10}
            style={{ textAlignVertical: "top" }}
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
              mask={Hour_MASK}
              value={hour}
              onChangeText={setHour}
            />
          </SectionDateHour>
        </ScrollView>

        <Button buttonType="PRIMARY" title="Cadastrar Refeição" />
      </Main>
    </Container>
  );
}
