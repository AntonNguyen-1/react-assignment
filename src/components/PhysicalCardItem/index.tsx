import { ICard } from "../../types";

type PhysicalCardItemProps = {
  card: ICard;
};

export const PhysicalCardItem = ({ card }: PhysicalCardItemProps) => {
  return <div className="cards-list-container">{card.id}</div>;
};
