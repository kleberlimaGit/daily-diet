import { Container, Subtitle, Title } from "./styles";

interface Props {
    title?: string;
    subtitle?: string;
}

export function PercentDietHome({ title,subtitle}: Props){
    return (
        <Container>
            <Title>90,86%</Title>
            <Subtitle>das refeições dentro da dieta</Subtitle>
        </Container>
    )
}