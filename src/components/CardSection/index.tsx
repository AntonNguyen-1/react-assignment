import React from "react";
import { ICard } from "../../types";

interface CardSectionProps {
  title: string;
  cards: ICard[];
  icon: React.ReactNode;
  CardItemComponent: React.FC<{ card: ICard }>;
  description: React.ReactNode;
}

export const CardSection: React.FC<CardSectionProps> = ({
  title,
  cards,
  icon,
  CardItemComponent,
  description,
}) => {
  return (
    <div className="card-section">
      <div className="card-type-title-wrapper">
        {icon}
        <h1 className="card-type-title">{title}</h1>
      </div>
      {cards.map((card) => (
        <CardItemComponent key={card.id} card={card} />
      ))}
      <div className="card-type-description">{description}</div>
    </div>
  );
};
