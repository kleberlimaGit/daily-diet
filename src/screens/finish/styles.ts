import { SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";


type Color = 'PRIMARY' | 'SECONDARY'

export type TypeColorProps = {
    color:Color;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  padding: 24px;
  justify-content: center;
  align-items: center;
`;


export const Title = styled.Text<TypeColorProps>`
  ${({ theme, color }) =>
    color === "PRIMARY" &&
    css`
      color: ${theme.COLORS.GREEN_DARK};
    `}

    ${({ theme, color }) =>
    color === "SECONDARY" &&
    css`
      color: ${theme.COLORS.RED_DARK};
    `}

    font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
    font-weight:bold;
`

export const StrongText = styled.Text`
font-weight: bold;
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`

export const ButtonContainer = styled.View`
    width: 200px;
`