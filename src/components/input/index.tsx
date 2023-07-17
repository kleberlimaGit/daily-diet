import { Container, HeightField, Label, Field } from "./styles";
import { MaskInputProps } from 'react-native-mask-input';

interface Props extends MaskInputProps {
  label: string;
  height: HeightField;
}

export function Input({ label, height, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Field height={height} {...rest} />
    </Container>
  );
}
