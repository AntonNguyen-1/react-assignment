import { ICard } from "../../types";

type OldCardItemProps = {
  card: ICard;
};

export const OldCardItem = ({ card }: OldCardItemProps) => {
  return <div className="cards-list-container">{card.id}</div>;
};
