import styled from "styled-components/native";


export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 102px;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
  `

  export const Title = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  color: ${({theme}) => theme.COLORS.GRAY_700}; 
  `

  export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}
  color: ${({theme}) => theme.COLORS.GRAY_600}; 
  `