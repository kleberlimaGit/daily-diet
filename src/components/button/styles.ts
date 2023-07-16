import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type TypeButton = "PRIMARY" | "SECONDARY";

type Props = {
  color: TypeButton
}

export const Container = styled(TouchableOpacity)<Props>`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) =>
    color === "PRIMARY" ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_100};
  width:100%;
  height: 50px;
  border-radius: 6px;
  flex-direction: row;
  gap: 5px;
  border: 1px solid ${({ theme, color }) =>
    color === "SECONDARY" ? theme.COLORS.GRAY_600 : ''};
`;

export const Title = styled.Text<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme, color }) =>
    color === "PRIMARY" ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
  size: 20
}))``;
