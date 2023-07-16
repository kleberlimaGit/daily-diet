import { Meal } from "@components/food/styles";
import { Container, DateText } from "./stylest";
import { Food } from "@components/food";

export function FoodList(){
    return (
        <Container>
            <DateText>16.07.23</DateText>
            <Food meal={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eum, illo blanditiis recusandae et sapiente error cum facilis cupiditate molestiae reprehenderit nam omnis nostrum voluptatum vero labore obcaecati debitis illum"}/>
            <Food meal={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eum, illo blanditiis recusandae et sapiente error cum facilis cupiditate molestiae reprehenderit nam omnis nostrum voluptatum vero labore obcaecati debitis illum"}/>
            <Food meal={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eum, illo blanditiis recusandae et sapiente error cum facilis cupiditate molestiae reprehenderit nam omnis nostrum voluptatum vero labore obcaecati debitis illum"}/>
            <Food meal={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eum, illo blanditiis recusandae et sapiente error cum facilis cupiditate molestiae reprehenderit nam omnis nostrum voluptatum vero labore obcaecati debitis illum"}/>
           
        </Container>
    )
}