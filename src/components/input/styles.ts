import styled from "styled-components/native";
import MaskInput from 'react-native-mask-input';


export type HeightField = '48px' | '100px'

type Height = {
    height: HeightField;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 4px;
  `

  export const Label = styled.Text`
  align-self: flex-start;
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  color: ${({theme}) => theme.COLORS.GRAY_700};
  `
  export const Field = styled(MaskInput)<Height>`
  width: 100%;
  height: ${({height}) => height};
  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
  padding: 16px;
  justify-content: flex-start;
  margin-bottom: 12px;
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  `