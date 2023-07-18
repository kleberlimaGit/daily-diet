import styled, { css } from "styled-components/native";
import ArrowUpRight from "phosphor-react-native/src/icons/ArrowUpRight";
import { TouchableOpacity } from "react-native";

export type DietStatusProps = {
  isDietGood?: boolean;
};

export const Container = styled(TouchableOpacity)<DietStatusProps>`
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  height: 110px;
  border-radius:6px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  ${({ theme, isDietGood }) =>
    !isDietGood &&
    css`
      background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
    `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  margin-bottom: 10px;
`; 

export const Icon = styled(ArrowUpRight).attrs<DietStatusProps>(() => ({
  size: 25,
}))`
align-self: flex-end;
`