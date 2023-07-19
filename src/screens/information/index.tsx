import { Head } from "@components/head";
import { Bullet, BulletContainer, BulletText, Container, Label, Main, Section, Text, Title } from "./styles";
import { ColorType } from "@components/head/styles";
import { Button } from "@components/button";

interface RouteParams {

}

export default function Information(){
    const color:ColorType = "GREEN"
    return (
        <Container>
            <Head color={color} title="Refeição"/>
            <Main>
                <Section>
                    <Title>Sanduíche</Title>
                    <Text>Sanduíche de pão integral com atum e salada de alface e tomate</Text>
                    <Label>Data e hora</Label>
                    <Text>19/07/2023 às 16:00</Text>
                    <BulletContainer>
                        <Bullet color="PRIMARY"/>
                        <BulletText>dentro da dieta</BulletText>
                    </BulletContainer>
                </Section>
                <Button buttonType="PRIMARY" title="Editar refeição" icon="border-color"/>
                <Button buttonType="SECONDARY" title="Excluir refeição" icon="delete"/>
            </Main>
        </Container>
    )
}