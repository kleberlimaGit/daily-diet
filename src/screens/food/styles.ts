import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export type DietStatusProps = {
  isDietGood?: boolean;
};

export const Container = styled.View`
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
  min-width: 166px;
  max-width: 166px;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
`

export const AlternativeSection = styled.View`
  min-width: 165px;
  max-width: 165px;
  flex-direction: row;
  align-items: flex-start;
  gap: 2px;
`

export const Label = styled.Text`
  margin: 14px 0 10px 0;
  align-self: flex-start;
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_700};
`
