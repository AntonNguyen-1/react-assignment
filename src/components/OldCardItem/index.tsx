import { ExpiredCardImage } from "../../assets/icons/ExpiredCardImage";
import { ICard } from "../../types";

type OldCardItemProps = {
  card: ICard;
};

export const OldCardItem = ({ card }: OldCardItemProps) => {
  return (
    <div className="cards-list-container old">
      <div className="icon-wrapper">
        <ExpiredCardImage />
      </div>
      <div className="card-info">
        <p className="masked-number">{card.maskedCardNumber}</p>
        <p className="card-type-text">
          Visa debit business |{" "}
          {card.type === "virtual" ? "Virtual Card" : "Physical Card"}
        </p>
      </div>
    </div>
  );
};
