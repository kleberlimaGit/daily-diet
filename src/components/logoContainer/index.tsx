import { Image } from "react-native"
import Logo from '@assets/Logo.png'
import Avatar from '@assets/Ellipse.png'
import { Container } from "./styles"

export function LogoContainer(){
    return (
        <Container>
            <Image source={Logo}/>
        </Container>
    )
}