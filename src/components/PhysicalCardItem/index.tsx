// import { ICard } from "../../types";

// type PhysicalCardItemProps = {
//   card: ICard;
// };

// export const PhysicalCardItem = ({ card }: PhysicalCardItemProps) => {
//   return <div className="cards-list-container">{card.id}</div>;
// };

import { ValidCardImage } from "../../assets/icons/ValidCardImage";
import { ICard } from "../../types";

type PhysicalCardItemProps = {
  card: ICard;
};

export const PhysicalCardItem = ({ card }: PhysicalCardItemProps) => {
  return (
    <div className="cards-list-container">
      <div className="icon-wrapper">
        <ValidCardImage />
      </div>
      <div className="card-info">
        <p className="holder-name">{card.holderName}</p>
        <p className="masked-number">{card.maskedCardNumber}</p>
      </div>
      <div className={`status ${card.isActive ? "active" : "inactive"}`}>
        {card.isActive ? "Active" : "Inactive"}
      </div>
    </div>
  );
};
