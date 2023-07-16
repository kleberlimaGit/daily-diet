import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  width:100%;
  height: 50px;
  border-radius: 6px;
  flex-direction: row;
  gap: 5px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE}
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
  size: 20,
  color: theme.COLORS.GRAY_100
}))``;
