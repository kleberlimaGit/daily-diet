import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  `

  export const DateText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_700};
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  align-self: flex-start;
  `