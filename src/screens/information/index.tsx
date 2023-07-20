import { Head } from "@components/head";
import {
  Bullet,
  BulletContainer,
  BulletText,
  Container,
  Label,
  Main,
  ModalButtonContainer,
  ModalContainer,
  ModalText,
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
import { Alert, View } from "react-native";
import Modal from "react-native-modal";
import { getById, removeDiet } from "@storage/diet/Diet";

interface RouteParams {
  id: string;
}

export default function Information() {
  const route = useRoute();
  const navigation = useNavigation();
  const [diet, setDiet] = useState<DietDTO>();
  const [isModalVisible, setModalVisible] = useState(false);

  const { id } = route.params as RouteParams;

  async function getDiet() {
    let dto = await getById(id);
    setDiet(dto);
  }

  async function deletDiet() {
    try {
      await removeDiet(id);
      navigation.navigate('home')
    } catch (error) {
      return Alert.alert("Error", "Erro inesperado tente novamente mais tarde");
    }
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useFocusEffect(
    useCallback(() => {
      getDiet();
    }, [])
  );
  return (
    <Container>
      <Head color={diet?.isDietGood ? "GREEN" : "RED"} title="Refeição" />
      <Main>
        <Section>
          <Title>{diet?.name}</Title>
          <Text>{diet?.description}</Text>
          <Label>Data e hora</Label>
          <Text>{`${diet?.date} às ${diet?.time}`}</Text>
          <BulletContainer>
            <Bullet color={diet?.isDietGood ? "PRIMARY" : "SECONDARY"} />
            <BulletText>
              {diet?.isDietGood ? "dentro" : "fora"} da dieta
            </BulletText>
          </BulletContainer>
        </Section>
        <Button
          buttonType="PRIMARY"
          title="Editar refeição"
          icon="border-color"
          onPress={() => navigation.navigate("food", { idDiet: diet?.id })}
        />
        <Button
          buttonType="SECONDARY"
          title="Excluir refeição"
          icon="delete"
          onPress={toggleModal}
        />
      </Main>
      <Modal isVisible={isModalVisible}>
        <ModalContainer>
           <ModalText>Deseja realmente excluir o registro da refeição?</ModalText>
          <ModalButtonContainer>

          <Button title="Cancelar" onPress={toggleModal} buttonType="SECONDARY"/>
          <Button title="Sim, Excluir" onPress={deletDiet} buttonType="PRIMARY"/>
          </ModalButtonContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
