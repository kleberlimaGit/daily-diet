import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  `

  export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-self:flex-start;
  margin-top:40px;
  margin-bottom:10px;
`;