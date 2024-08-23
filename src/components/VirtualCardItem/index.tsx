import { ICard } from "../../types";

type VirtualCardItemProps = {
  card: ICard;
};

export const VirtualCardItem = ({ card }: VirtualCardItemProps) => {
  return <div className="cards-list-container">{card.id}</div>;
};
