
import styled from "styled-components/native";

export type ColorType = "GRAY" | "GREEN" | "RED" ;

type Props = {
    color: ColorType;
}
export const Container = styled.View<Props>`
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  padding: 14px;
  background-color: ${({theme, color}) => {
    switch (color) {
        case "GRAY": return theme.COLORS.GRAY_200;
        case "GREEN": return theme.COLORS.GREEN_LIGHT;
        case "RED": return theme.COLORS.RED_LIGHT; 
    }
  }};
`;

export const Quantity = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
 
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  margin-bottom: 10px;
  text-align:center;
`; 