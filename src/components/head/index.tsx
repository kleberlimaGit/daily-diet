import { useTheme } from "styled-components/native";
import { ColorType, Header, Icon, IconContainer, Title } from "./styles";

interface Props {
  color: ColorType;
  title: string;
}

export function Head({ color, title }: Props) {
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
  return (
    <Header color={color}>
      <IconContainer>
        <Icon color={getColor()}/>
      </IconContainer>
      <Title>{title}</Title>
    </Header>
  );
}
