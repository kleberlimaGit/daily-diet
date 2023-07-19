import { useTheme } from "styled-components/native";
import { ColorType, Header, Icon, IconContainer, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Props {
  color: ColorType;
  title: string;
}

export function Head({ color, title }: Props) {
  
  const navigation = useNavigation();

  const { COLORS } = useTheme();
  function getColor(){
    switch (color) {
      case "GRAY":
        return COLORS.GRAY_700;
      case "GREEN":
        return COLORS.GREEN_DARK;
      case "RED":
        return COLORS.RED_DARK;
    }
  }

  function handleGoBack(){
    navigation.navigate('home')
  }

  return (
    <Header color={color}>
      <IconContainer onPress={handleGoBack}>
        <Icon color={getColor()}/>
      </IconContainer>
      <Title>{title}</Title>
    </Header>
  );
}
