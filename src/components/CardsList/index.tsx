import { data } from "../../api/api.json";
import { OldCardItem } from "../OldCardItem";
import { PhysicalCardItem } from "../PhysicalCardItem";
import { VirtualCardItem } from "../VirtualCardItem";
import { ICard } from "../../types";
import { CardSection } from "../CardSection";
import { OldCardsIcon } from "../../assets/icons/OldCardsIcon";
import { PhysicalCardsIcon } from "../../assets/icons/PhysicalCardsIcon";
import { VirtualCardsIcon } from "../../assets/icons/VirtualCardsIcon";
import { СheckedIcon } from "../../assets/icons/СheckedIcon";

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
    <div className="cards-section-container">
      <CardSection
        title="Virtual Cards"
        cards={virtualCards}
        CardItemComponent={VirtualCardItem}
        icon={<VirtualCardsIcon />}
        description={
          <div className="description-wrapper">
            <div className="description-item">
              <СheckedIcon />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        }
      />
      <CardSection
        title="Physical Cards"
        icon={<PhysicalCardsIcon />}
        cards={physicalCards}
        CardItemComponent={PhysicalCardItem}
        description={
          <div className="description-wrapper">
            <div className="description-item">
              <СheckedIcon />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore mag
              </p>
            </div>
            <div className="description-item">
              <СheckedIcon />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className="description-item">
              <СheckedIcon />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        }
      />
      <CardSection
        title="Old Cards"
        icon={<OldCardsIcon />}
        cards={oldCards}
        CardItemComponent={OldCardItem}
        description={
          <div className="description-wrapper">
            <div className="description-item">
              <СheckedIcon />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className="description-item">
              <СheckedIcon />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad min
              </p>
            </div>
          </div>
        }
      />

      <div className="buttons-container">
        <button className="continue-btn">Continue</button>
        <button className="back-btn">Back</button>
      </div>
    </div>
  );
};
