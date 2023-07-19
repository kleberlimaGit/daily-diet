import { Meal } from "@components/food/styles";
import { Container, DateText } from "./stylest";
import { Food } from "@components/food";
import { format } from 'date-fns'

interface Props {
    diet:DietDTO
}

export function FoodList({diet}:Props){

    return (
        <Container>
            <DateText>{diet.date}</DateText>
            <Food meal={diet}/>
        </Container>
    )
}