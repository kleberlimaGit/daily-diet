import { PercentDietHome } from "@components/PercentDietHome";
import { Container, Label } from "./styles";
import { Header } from "@components/header";
import { Button } from "@components/button";

export default function Home(){
    return (
        <Container>
            <Header/>
            <PercentDietHome/>
            <Label>Refeições</Label>
            <Button icon="plus-one" />
        </Container>
    )
}