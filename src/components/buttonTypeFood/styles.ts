import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Color = "PRIMARY" | "SECONDARY";

export type TypeStyleProps = {
  isActive?: boolean;
  color: Color;
};

export const Container = styled(TouchableOpacity)<TypeStyleProps>`
  border-radius: 6px;
  margin-right: 12px;
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  ${({ theme, isActive, color }) =>
    isActive &&
    color === "PRIMARY" &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_DARK};
      background-color: ${theme.COLORS.GREEN_LIGHT};
    `}

  ${({ theme, isActive, color }) =>
    isActive &&
    color === "SECONDARY" &&
    css`
      border: 1px solid ${theme.COLORS.RED_DARK};
      background-color: ${theme.COLORS.RED_LIGHT};
    `}
`;

export const Bullet = styled.Text<TypeStyleProps>`
  ${({ theme, color }) =>
    color === "PRIMARY" &&
    css`
      background-color: ${theme.COLORS.GREEN_DARK};
    `}

  ${({ theme, color }) =>
    color === "SECONDARY" &&
    css`
      background-color: ${theme.COLORS.RED_DARK};
    `}

  width:8px;
  height: 8px;
  border-radius: 4px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-weight: bold;
`;
