import { TouchableProps } from "react-native-svg";
import { Container, Text, TypeStyleProps, Bullet } from "./styles";


interface Props extends TypeStyleProps, TouchableProps{
    text:string
}

export function ButtonTypeFood({text, color, isActive, ...rest}:Props){
    return (
        <Container color={color} isActive={isActive} {...rest}>
            <Bullet color={color}/>
            <Text>{text}</Text>
        </Container>
    )
}