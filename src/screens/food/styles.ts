import styled, { css } from "styled-components/native";
import ArrowLeft from "phosphor-react-native/src/icons/ArrowLeft";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type DietStatusProps = {
  isDietGood?: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
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
`

export const SectionDateHour = styled.View`
  flex: 1;
  min-width: 160px;
  max-width: 165px;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
`

export const Label = styled.Text`
  align-self: flex-start;
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_700};
`
