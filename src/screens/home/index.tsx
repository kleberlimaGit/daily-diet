import { PercentDietHome } from "@components/PercentDietHome";
import { Container, Label } from "./styles";
import { LogoContainer } from "@components/logoContainer";
import { Button } from "@components/button";
import { FoodList } from "@components/foodList";

export default function Home(){
    return (
        <Container>
            <LogoContainer/>
            <PercentDietHome/>
            <Label>Refeições</Label>
            <Button icon="add" buttonType="PRIMARY" title="Nova Refeição"/>
            <FoodList/>
        </Container>
    )
}