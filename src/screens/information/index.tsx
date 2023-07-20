import { Head } from "@components/head";
import {
  Bullet,
  BulletContainer,
  BulletText,
  Container,
  Label,
  Main,
  Section,
  Text,
  Title,
} from "./styles";
import { Button } from "@components/button";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";
import { getById } from "@storage/diet/Diet";

interface RouteParams {
  id: string;
}

export default function Information() {
  const route = useRoute();
  const navigation = useNavigation();
  const [diet, setDiet] = useState<DietDTO>();
  const { id } = route.params as RouteParams;

  
  async function getDiet() {
    let dto = await getById(id);
    setDiet(dto);
  }

  useFocusEffect(
    useCallback(() => {
      getDiet();
    }, [])
  );
  return (
    <Container>
      <Head color={diet?.isDietGood ? 'GREEN' : 'RED'} title="Refeição" />
      <Main>
        <Section>
          <Title>{diet?.name}</Title>
          <Text>
            {diet?.description}
          </Text>
          <Label>Data e hora</Label>
          <Text>{`${diet?.date} às ${diet?.time}`}</Text>
          <BulletContainer>
            <Bullet color={diet?.isDietGood ? 'PRIMARY' : 'SECONDARY'} />
            <BulletText>{diet?.isDietGood ? 'dentro' : 'fora'} da dieta</BulletText>
          </BulletContainer>
        </Section>
        <Button
          buttonType="PRIMARY"
          title="Editar refeição"
          icon="border-color"
          onPress={() => navigation.navigate('food', {idDiet: diet?.id})}
        />
        <Button buttonType="SECONDARY" title="Excluir refeição" icon="delete" />
      </Main>
    </Container>
  );
}
