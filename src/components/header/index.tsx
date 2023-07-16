import { Image } from "react-native"
import Logo from '@assets/Logo.png'
import Avatar from '@assets/Ellipse.png'
import { Container } from "./styles"

export function Header(){
    return (
        <Container>
            <Image source={Logo}/>
            <Image source={Avatar}/>
        </Container>
    )
}