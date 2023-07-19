import { Container, DateText } from "./stylest";
import { Food } from "@components/food";
import { convertStringToDate } from "@utils/utils";
import { format } from "date-fns";

interface Props {
  diet: DietDTO[];
  date: string;
}

export function FoodList({ diet, date }: Props) {
  return (
    <Container>
      <DateText>{format(convertStringToDate(date), "dd.MM.yy")}</DateText>
      {diet.filter(x => x.date === date).map((x) => {
        return <Food key={x.id} meal={x} />;
      })}
    </Container>
  );
}
