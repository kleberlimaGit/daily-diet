import styled, {css} from "styled-components/native";

export type DietStatusProps = {
    isDietGood?: boolean;
  };

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_400}
  width: 100%;
  height: 50px;
  margin-top: 10px;
  flex-direction: row;
  gap: 10px;
  padding: 0 10px;
  `;

  export const Time = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_700}
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  `

  export const Divider = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_400};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  `
  export const Meal = styled.Text`
  flex: 1;
  color: ${({theme}) => theme.COLORS.GRAY_600};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  `
  export const Bullet = styled.Text<DietStatusProps>`
  border-radius: 7px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
  width: 14px;
  height: 14px;

  ${({ theme, isDietGood }) =>
  !isDietGood &&
  css`
    background-color: ${({ theme }) => theme.COLORS.RED_MID};
  `}
`;