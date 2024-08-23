export interface ICard {
  id: string;
  holderName: string;
  maskedCardNumber: string;
  isActive: boolean;
  expiresAt: string;
  type: string;
}
