import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Color = "PRIMARY" | "SECONDARY";

export type TypeStyleProps = {
  isActive?: boolean;
  color: Color;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Main = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 40px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -15px;
  gap: 12px;
`;

export const Section = styled.View`
  flex: 1;
  width: 100%;
  gap: 12px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Label = styled.Text`
  margin: 14px 0 10px 0;
  align-self: flex-start;
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
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

export const BulletText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
