import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export function Button({ icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
      <Title>Nova Refeição</Title>
    </Container>
  );
}
