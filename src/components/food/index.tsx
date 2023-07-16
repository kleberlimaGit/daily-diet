import { Bullet, Container, Divider, Meal, Time } from "./styles"

export function Food(){
    return (
        <Container>
            <Time>20:00</Time>
            <Divider>|</Divider>
            <Meal>Lorem ipsum, dolor sit</Meal>
            <Bullet/>
        </Container>
    )
}