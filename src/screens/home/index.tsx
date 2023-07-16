import { PercentDietHome } from "@components/PercentDietHome";
import { Container, Label } from "./styles";
import { Header } from "@components/header";
import { Button } from "@components/button";
import { Food } from "@components/food";
import { FoodList } from "@components/foodList";

export default function Home(){
    return (
        <Container>
            <Header/>
            <PercentDietHome/>
            <Label>Refeições</Label>
            <Button icon="plus-one" />
            <FoodList/>
        </Container>
    )
}