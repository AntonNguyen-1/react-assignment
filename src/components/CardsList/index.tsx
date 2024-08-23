import { data } from "../../api/api.json";
import { OldCardItem } from "../OldCardItem";
import { PhysicalCardItem } from "../PhysicalCardItem";
import { VirtualCardItem } from "../VirtualCardItem";
import { ICard } from "../../types";
import { CardSection } from "../CardSection";
import { OldCardsIcon } from "../../assets/icons/OldCardsIcon";
import { PhysicalCardsIcon } from "../../assets/icons/PhysicalCardsIcon";
import { VirtualCardsIcon } from "../../assets/icons/VirtualCardsIcon";

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
      <VirtualCardsIcon />
      <CardSection
        title="Virtual Cards"
        cards={virtualCards}
        CardItemComponent={VirtualCardItem}
        description={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        }
      />
      <PhysicalCardsIcon />
      <CardSection
        title="Physical Cards"
        cards={physicalCards}
        CardItemComponent={PhysicalCardItem}
        description={
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore mag
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </>
        }
      />
      <OldCardsIcon />
      <CardSection
        title="Old Cards"
        cards={oldCards}
        CardItemComponent={OldCardItem}
        description={
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad min
            </p>
          </>
        }
      />
      <div className="buttons-container">
        <button className="continue-btn">Continue</button>
        <button className="back-btn">Back</button>
      </div>
    </div>
  );
};
