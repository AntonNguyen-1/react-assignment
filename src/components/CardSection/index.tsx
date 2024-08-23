import React from "react";
import { ICard } from "../../types";

interface CardSectionProps {
  title: string;
  cards: ICard[];
  CardItemComponent: React.FC<{ card: ICard }>;
  description: React.ReactNode;
}

export const CardSection: React.FC<CardSectionProps> = ({
  title,
  cards,
  CardItemComponent,
  description,
}) => {
  return (
    <div>
      <h1 className="card-type-title">{title}</h1>
      {cards.map((card) => (
        <CardItemComponent key={card.id} card={card} />
      ))}
      <div className="card-type-description">{description}</div>
    </div>
  );
};
