import { data } from "../../api/api.json";
import { OldCardItem } from "../OldCardItem";
import { PhysicalCardItem } from "../PhysicalCardItem";
import { VirtualCardItem } from "../VirtualCardItem";
import { ICard } from "../../types";

export const CardsList = () => {
  const currentDate = new Date();

  const cards: ICard[] = data.cards;

  const { virtualCards, physicalCards, oldCards } = cards.reduce(
    (acc, card: ICard) => {
      const cardDate = new Date(card.expiresAt);

      if (cardDate > currentDate) {
        if (card.type === "virtual") {
          acc.virtualCards.push(card);
        } else if (card.type === "physical") {
          acc.physicalCards.push(card);
        }
      } else {
        acc.oldCards.push(card);
      }

      return acc;
    },
    {
      virtualCards: [] as ICard[],
      physicalCards: [] as ICard[],
      oldCards: [] as ICard[],
    }
  );

  return (
    <div className="cards-list-container">
      {virtualCards.map((card) => (
        <VirtualCardItem key={card.id} card={card} />
      ))}
      {physicalCards.map((card) => (
        <PhysicalCardItem key={card.id} card={card} />
      ))}
      {oldCards.map((card) => (
        <OldCardItem key={card.id} card={card} />
      ))}
    </div>
  );
};
