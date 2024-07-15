export interface ICardOffer {
  image: string;
  premium: boolean;
  price: number;
  title: string;
  type: string;
  favorites: boolean;
  rating: number;
  className?: string;
  width?: number;
  height?: number;
}

export interface IOfferImageData {
  id: number;
  image: string;
  alt: string;
}
