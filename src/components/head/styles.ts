import styled, { css } from "styled-components/native";
import ArrowLeft from "phosphor-react-native/src/icons/ArrowLeft";
import { TouchableOpacity } from "react-native";

export type ColorType = "GRAY" | "GREEN" | "RED" ;

type Props = {
    color: ColorType;
}


export const Header = styled.View<Props>`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 132px;
  padding: 24px;

  background-color: ${({theme, color}) => {
    switch (color) {
        case "GRAY": return theme.COLORS.GRAY_300;
        case "GREEN": return theme.COLORS.GREEN_LIGHT;
        case "RED": return theme.COLORS.RED_LIGHT; 
    }
  }};
`;

export const IconContainer = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center; 
  width: 100%;
`;

export const Icon = styled(ArrowLeft).attrs(() => ({
  size: 25,
}))`
  align-self: flex-start;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
