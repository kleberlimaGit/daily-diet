import { Container, Text, TypeStyleProps, Bullet } from "./styles";


interface Props extends TypeStyleProps{
    text:string
}

export function ButtonTypeFood({text, color, isActive = false}:Props){
    return (
        <Container color={color} isActive={isActive}>
            <Bullet color={color}/>
            <Text>{text}</Text>
        </Container>
    )
}