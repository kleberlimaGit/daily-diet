import { ColorType, Container, Info, Quantity } from "./styles";

interface Props {
  color: ColorType;
  quantity: string;
  info: string;
}

export function CardInfo({ color, quantity, info }: Props) {
  return (
    <Container color={color}>
      <Quantity>{quantity}</Quantity>
      <Info>{info}</Info>
    </Container>
  );
}
