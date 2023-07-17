import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Color = "PRIMARY" | "SECONDARY"

export type TypeStyleProps = {
  isActive?: boolean;
  color: Color;
};

export const Container = styled(TouchableOpacity)<TypeStyleProps>`
  ${({ theme, isActive, color }) =>
    isActive && color === "PRIMARY" &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_DARK};
      background-color: ${theme.COLORS.GREEN_MID};
    `}

    ${({ theme, isActive, color }) =>
    isActive && color === "SECONDARY" &&
    css`
      border: 1px solid ${theme.COLORS.RED_DARK};
      background-color: ${theme.COLORS.RED_MID};
    `}

  border-radius: 4px;
  margin-right: 12px;
  height: 45px;
  width: 80px;

  align-items: center;
  justify-content: center;
`;
