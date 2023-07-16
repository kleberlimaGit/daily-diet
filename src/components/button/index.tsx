import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title, TypeButton } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface Props extends TouchableOpacityProps {
  icon?: keyof typeof MaterialIcons.glyphMap;
  buttonType: TypeButton;
  title: string;
}

export function Button({ icon, buttonType, title, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container {...rest} color={buttonType}>
      <Icon
        name={icon}
        color={buttonType === "PRIMARY" ? COLORS.GRAY_200 : COLORS.GRAY_600}
      />
      <Title color={buttonType}>{title}</Title>
    </Container>
  );
}
