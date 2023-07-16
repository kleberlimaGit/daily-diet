import styled, { css } from "styled-components/native";
import ArrowLeft from "phosphor-react-native/src/icons/ArrowLeft";
import { TouchableOpacity } from "react-native";

export type DietStatusProps = {
  isDietGood?: boolean;
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View<DietStatusProps>`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
  padding: 24px;

  ${({ theme, isDietGood }) =>
    !isDietGood &&
    css`
      background-color: ${({ theme }) => theme.COLORS.RED_MID};
    `}
`;

export const IconContainer = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center; 
  width: 100%;
`;

export const Icon = styled(ArrowLeft).attrs<DietStatusProps>(() => ({
  size: 25,
}))`
  align-self: flex-start;
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

export const Main = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 40px 24px 0 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -15px;
  gap: 12px;
`;

export const DietContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 166px;
  gap: 12px;
`;
